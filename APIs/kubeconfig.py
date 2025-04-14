import yaml
import base64

# Load and encode CA certificate contents
def load_ca_data(ca_path):
    with open(ca_path, "rb") as ca_file:
        return base64.b64encode(ca_file.read()).decode("utf-8")

# Paths to CA certificates
ca_atonixcorpv1 = "/home/atonixdevmaster/certificates/CA.crt"
ca_quetzal = "/home/atonixdevmaster/certificates/CA.crt"  # Use the appropriate path if different

# Define the Kubernetes configuration
kube_config = {
    "apiVersion": "v1",
    "kind": "Config",
    "clusters": [
        {
            "name": "vertexops",
            "cluster": {
                "server": " https://127.0.0.1:6443",
               # "certificate-authority-data": load_ca_data(ca_atonixcorpv1)
            }
        },
        {
            "name": "quetzal",
            "cluster": {
                "server": " https://127.0.0.1:6443",
               # "certificate-authority-data": load_ca_data(ca_quetzal)
            }
        }
    ],
    "contexts": [
        {
            "name": "vertexops-context",
            "context": {
                "cluster": "vertexops",
                "namespace": "atonixcorpvm",
                "user": "admin"
            }
        },
        {
            "name": "quetzal-context",
            "context": {
                "cluster": "quetzal",
                "namespace": "atonixcorpvm",
                "user": "admin"
            }
        }
    ],
    "current-context": "vertexops-context",
    "users": [
        {
            "name": "admin",
            "user": {
                "token": "/etc/kubernetes/admin.conf"
            }
        }
    ]
}

# Save the configuration to .kube/config
config_path = "/home/atonixdevmaster/.kube/config"
with open(config_path, "w") as file:
    yaml.dump(kube_config, file)

print(f"Configuration saved to {config_path}")