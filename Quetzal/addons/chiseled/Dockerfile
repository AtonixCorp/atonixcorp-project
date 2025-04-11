ARG UBUNTU_RELEASE=24.04
ARG CHISEL_VERSION=v1.1.0

FROM ubuntu:$UBUNTU_RELEASE AS builder
ARG TARGETARCH UBUNTU_RELEASE CHISEL_VERSION
SHELL ["/bin/bash", "-oeux", "pipefail", "-c"]

RUN apt-get update \
    && DEBIAN_FRONTEND=noninteractive apt-get install -y ca-certificates \
    && apt-get clean -y \
    && rm -rf /var/lib/apt/lists/*

ADD "https://github.com/canonical/chisel/releases/download/${CHISEL_VERSION}/chisel_${CHISEL_VERSION}_linux_${TARGETARCH}.tar.gz" \
    chisel.tar.gz

RUN tar -xvf chisel.tar.gz -C /usr/bin/

RUN mkdir /staging-rootfs \
    && chisel cut --release "ubuntu-$UBUNTU_RELEASE" --root /staging-rootfs \
        base-files_base \
        base-files_release-info \
        base-files_chisel \
        ca-certificates_data \
        python3_standard

RUN cp /etc/passwd /etc/group /staging-rootfs/etc \
    && install -o ubuntu -g ubuntu -d /staging-rootfs/home/ubuntu


FROM scratch

COPY --from=builder /staging-rootfs /

USER ubuntu
WORKDIR /home/ubuntu

ENTRYPOINT ["python3"]
