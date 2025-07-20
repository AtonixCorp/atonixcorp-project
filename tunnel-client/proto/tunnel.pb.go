package proto

import (
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"

	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type TunnelPacket_Type int32

const (
	TunnelPacket_HELLO TunnelPacket_Type = 0
	TunnelPacket_OPEN  TunnelPacket_Type = 1
	TunnelPacket_DATA  TunnelPacket_Type = 2
	TunnelPacket_CLOSE TunnelPacket_Type = 3
)

// Enum value maps for TunnelPacket_Type.
var (
	TunnelPacket_Type_name = map[int32]string{
		0: "HELLO",
		1: "OPEN",
		2: "DATA",
		3: "CLOSE",
	}
	TunnelPacket_Type_value = map[string]int32{
		"HELLO": 0,
		"OPEN":  1,
		"DATA":  2,
		"CLOSE": 3,
	}
)

func (x TunnelPacket_Type) Enum() *TunnelPacket_Type {
	p := new(TunnelPacket_Type)
	*p = x
	return p
}

func (x TunnelPacket_Type) String() string {
	return protoimpl.X.EnumStringOf(x.Descriptor(), protoreflect.EnumNumber(x))
}

func (TunnelPacket_Type) Descriptor() protoreflect.EnumDescriptor {
	return file_tunnel_proto_enumTypes[0].Descriptor()
}

func (TunnelPacket_Type) Type() protoreflect.EnumType {
	return &file_tunnel_proto_enumTypes[0]
}

func (x TunnelPacket_Type) Number() protoreflect.EnumNumber {
	return protoreflect.EnumNumber(x)
}

// Deprecated: Use TunnelPacket_Type.Descriptor instead.
func (TunnelPacket_Type) EnumDescriptor() ([]byte, []int) {
	return file_tunnel_proto_rawDescGZIP(), []int{0, 0}
}

type TunnelPacket struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	Type          TunnelPacket_Type      `protobuf:"varint,1,opt,name=type,proto3,enum=proto.TunnelPacket_Type" json:"type,omitempty"`
	TunnelId      string                 `protobuf:"bytes,2,opt,name=tunnelId,proto3" json:"tunnelId,omitempty"`
	StreamId      string                 `protobuf:"bytes,3,opt,name=streamId,proto3" json:"streamId,omitempty"`
	Payload       []byte                 `protobuf:"bytes,4,opt,name=payload,proto3" json:"payload,omitempty"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *TunnelPacket) Reset() {
	*x = TunnelPacket{}
	mi := &file_tunnel_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *TunnelPacket) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TunnelPacket) ProtoMessage() {}

func (x *TunnelPacket) ProtoReflect() protoreflect.Message {
	mi := &file_tunnel_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TunnelPacket.ProtoReflect.Descriptor instead.
func (*TunnelPacket) Descriptor() ([]byte, []int) {
	return file_tunnel_proto_rawDescGZIP(), []int{0}
}

func (x *TunnelPacket) GetType() TunnelPacket_Type {
	if x != nil {
		return x.Type
	}
	return TunnelPacket_HELLO
}

func (x *TunnelPacket) GetTunnelId() string {
	if x != nil {
		return x.TunnelId
	}
	return ""
}

func (x *TunnelPacket) GetStreamId() string {
	if x != nil {
		return x.StreamId
	}
	return ""
}

func (x *TunnelPacket) GetPayload() []byte {
	if x != nil {
		return x.Payload
	}
	return nil
}

var File_tunnel_proto protoreflect.FileDescriptor

const file_tunnel_proto_rawDesc = "" +
	"\n" +
	"\ftunnel.proto\x12\x05proto\"\xc0\x01\n" +
	"\fTunnelPacket\x12,\n" +
	"\x04type\x18\x01 \x01(\x0e2\x18.proto.TunnelPacket.TypeR\x04type\x12\x1a\n" +
	"\btunnelId\x18\x02 \x01(\tR\btunnelId\x12\x1a\n" +
	"\bstreamId\x18\x03 \x01(\tR\bstreamId\x12\x18\n" +
	"\apayload\x18\x04 \x01(\fR\apayload\"0\n" +
	"\x04Type\x12\t\n" +
	"\x05HELLO\x10\x00\x12\b\n" +
	"\x04OPEN\x10\x01\x12\b\n" +
	"\x04DATA\x10\x02\x12\t\n" +
	"\x05CLOSE\x10\x032H\n" +
	"\rTunnelService\x127\n" +
	"\aConnect\x12\x13.proto.TunnelPacket\x1a\x13.proto.TunnelPacket(\x010\x01B0Z.github.com/atonixdev/tunnel-client/proto;protob\x06proto3"

var (
	file_tunnel_proto_rawDescOnce sync.Once
	file_tunnel_proto_rawDescData []byte
)

func file_tunnel_proto_rawDescGZIP() []byte {
	file_tunnel_proto_rawDescOnce.Do(func() {
		file_tunnel_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_tunnel_proto_rawDesc), len(file_tunnel_proto_rawDesc)))
	})
	return file_tunnel_proto_rawDescData
}

var file_tunnel_proto_enumTypes = make([]protoimpl.EnumInfo, 1)
var file_tunnel_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_tunnel_proto_goTypes = []any{
	(TunnelPacket_Type)(0), // 0: proto.TunnelPacket.Type
	(*TunnelPacket)(nil),   // 1: proto.TunnelPacket
}
var file_tunnel_proto_depIdxs = []int32{
	0, // 0: proto.TunnelPacket.type:type_name -> proto.TunnelPacket.Type
	1, // 1: proto.TunnelService.Connect:input_type -> proto.TunnelPacket
	1, // 2: proto.TunnelService.Connect:output_type -> proto.TunnelPacket
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_tunnel_proto_init() }
func file_tunnel_proto_init() {
	if File_tunnel_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_tunnel_proto_rawDesc), len(file_tunnel_proto_rawDesc)),
			NumEnums:      1,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_tunnel_proto_goTypes,
		DependencyIndexes: file_tunnel_proto_depIdxs,
		EnumInfos:         file_tunnel_proto_enumTypes,
		MessageInfos:      file_tunnel_proto_msgTypes,
	}.Build()
	File_tunnel_proto = out.File
	file_tunnel_proto_goTypes = nil
	file_tunnel_proto_depIdxs = nil
}
