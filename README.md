
# AtonixCorp Compute & Storage Platform

## Overview

This repository powers AtonixCorp’s modular computation and storage backbone — the internal stack supporting scalable services, data persistence, distributed coordination, and microservice orchestration. This is **not** a general company profile — it is the *infrastructure layer* that underpins our domain-specific tools across medicine, agriculture, security, and advanced analytics.

---

## Features

- ⚙️ Modular job orchestration with task runners and daemon engines
- 🧱 Polyglot storage support: PostgreSQL, MySQL, SQLite3, MariaDB, and Kafka
- 🛡 Auth-proxy for API gateway routing and identity enforcement
- 🗄 Unified CLI: `atonixctl` (written in Rust) for managing nodes, logs, and agents
- 🧭 Distributed coordination via Apache ZooKeeper

---

## Architecture

| Component         | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| **atonixctl**     | CLI interface for controlling and introspecting system components          |
| **core-daemon**   | Task scheduler and background processor                                     |
| **storage-layer** | Abstractions over traditional RDBMS + event streaming backends             |
| **zookeeper-bridge** | Handles leader election and ephemeral coordination for clustered jobs |
| **auth-proxy**    | Secure gateway service enforcing identity, scoping, and access policies    |
| **service-sdk**   | Go libraries for building platform-native microservices                    |

---

## Getting Started

```bash
git clone https://github.com/AtonixCorp/atonixcorp-project.git
cd atonixcorp-project
make setup