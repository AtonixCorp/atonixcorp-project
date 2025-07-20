package main

import (
	"context"
	"crypto/tls"
	"io"
	"log"
	"net"
	"sync"
	"time"

	pb "github.com/atonixdev/tunnel-client/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
)

func main() {
	brokerAddr := "atonixcorpvm.atonixcorp.org:443"
	localServiceAddr := "127.0.0.1:8000"
	token := "dc7885bd38735bb72f4ecb645b0e6ee43266d97f9709fc741c3c480fd95ff695044167a2cfaba89ebd958bb81da4f30a07d483f671969c148268d133a6e10df7"
	tunnelID := "svc1"

	tlsCreds := credentials.NewTLS(&tls.Config{
		InsecureSkipVerify: true,
	})

	conn, err := grpc.Dial(brokerAddr, grpc.WithTransportCredentials(tlsCreds))
	if err != nil {
		log.Fatalf("Dial error: %v", err)
	}
	defer conn.Close()

	client := pb.NewTunnelServiceClient(conn)
	ctx, cancel := context.WithCancel(context.Background())
	defer cancel()

	stream, err := client.Connect(ctx)
	if err != nil {
		log.Fatalf("Connect error: %v", err)
	}

	// Send HELLO
	if err := stream.Send(&pb.TunnelPacket{
		Type:     pb.TunnelPacket_HELLO,
		TunnelId: tunnelID,
		Payload:  []byte(token),
	}); err != nil {
		log.Fatalf("HELLO send error: %v", err)
	}

	var mu sync.Mutex
	localConnMap := make(map[string]net.Conn)

	// Receive loop
	go func() {
		for {
			pkt, err := stream.Recv()
			if err == io.EOF {
				log.Println("Stream closed by broker")
				return
			}
			if err != nil {
				log.Fatalf("Recv error: %v", err)
			}

			switch pkt.Type {
			case pb.TunnelPacket_OPEN:
				go handleOpen(pkt.StreamId, stream, localServiceAddr, tunnelID, &mu, localConnMap)
			case pb.TunnelPacket_DATA:
				mu.Lock()
				if local, ok := localConnMap[pkt.StreamId]; ok {
					local.Write(pkt.Payload)
				}
				mu.Unlock()
			case pb.TunnelPacket_CLOSE:
				mu.Lock()
				if local, ok := localConnMap[pkt.StreamId]; ok {
					local.Close()
					delete(localConnMap, pkt.StreamId)
				}
				mu.Unlock()
			}
		}
	}()

	// Keep-alive ping
	ticker := time.NewTicker(30 * time.Second)
	for range ticker.C {
		stream.Send(&pb.TunnelPacket{
			Type:     pb.TunnelPacket_HELLO,
			TunnelId: tunnelID,
			Payload:  []byte("ping"),
		})
	}
}

func handleOpen(streamID string, stream pb.TunnelService_ConnectClient, localAddr, tunnelID string, mu *sync.Mutex, connMap map[string]net.Conn) {
	local, err := net.Dial("tcp", localAddr)
	if err != nil {
		stream.Send(&pb.TunnelPacket{Type: pb.TunnelPacket_CLOSE, TunnelId: tunnelID, StreamId: streamID})
		return
	}

	mu.Lock()
	connMap[streamID] = local
	mu.Unlock()

	buf := make([]byte, 4096)
	for {
		n, err := local.Read(buf)
		if err != nil {
			break
		}
		stream.Send(&pb.TunnelPacket{Type: pb.TunnelPacket_DATA, TunnelId: tunnelID, StreamId: streamID, Payload: buf[:n]})
	}
	stream.Send(&pb.TunnelPacket{Type: pb.TunnelPacket_CLOSE, TunnelId: tunnelID, StreamId: streamID})
}
