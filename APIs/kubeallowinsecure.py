from kubernetes import client, config
import urllib3

# Prompt user for the host (API server URL)
def get_server_url():
    default_url = "https://172.31.74.66:6443"  # Your host IP
    server_url = input(f"Enter the Kubernetes API server URL (default: {default_url}): ")
    return server_url if server_url else default_url

# Dynamically update the kubeconfig file
def load_dynamic_kubeconfig(server_url, disable_ssl_verify=False):
    # Load kubeconfig from the specified path
    config.load_kube_config(config_file="/home/atonixdevmaster/.kube/config")
    
    # Update the server URL in the loaded config
    configuration = client.Configuration.get_default_copy()
    configuration.host = server_url
    
    # Optionally disable SSL verification (for self-signed certificates)
    if disable_ssl_verify:
        urllib3.disable_warnings()  # Suppress SSL warnings (debugging only)
        configuration.verify_ssl = False

    client.Configuration.set_default(configuration)

# API instance for managing roles and bindings
rbac_api = client.RbacAuthorizationV1Api()

# Step 1: Create ClusterRole for Admin Access
def create_cluster_role():
    cluster_role = client.V1ClusterRole(
        metadata=client.V1ObjectMeta(name="admin-role"),
        rules=[
            client.V1PolicyRule(
                api_groups=[""],  # Core API groups
                resources=["*"],  # All resources
                verbs=["*"]       # All verbs (get, list, create, delete, etc.)
            ),
            client.V1PolicyRule(
                api_groups=["apps"],  # Apps API group
                resources=["*"],      # All resources
                verbs=["*"]           # All verbs
            ),
        ]
    )
    try:
        rbac_api.create_cluster_role(cluster_role)
        print("ClusterRole 'admin-role' created successfully.")
    except client.exceptions.ApiException as e:
        print(f"Failed to create ClusterRole: {e}")

# Step 2: Create ServiceAccount for User
def create_service_account(namespace):
    core_api = client.CoreV1Api()
    sa = client.V1ServiceAccount(
        metadata=client.V1ObjectMeta(name="admin-user", namespace=namespace)
    )
    try:
        core_api.create_namespaced_service_account(namespace=namespace, body=sa)
        print(f"ServiceAccount 'admin-user' created in namespace '{namespace}'.")
    except client.exceptions.ApiException as e:
        print(f"Failed to create ServiceAccount: {e}")

# Step 3: Create ClusterRoleBinding
def create_role_binding(namespace):
    role_binding = client.V1ClusterRoleBinding(
        metadata=client.V1ObjectMeta(name="admin-role-binding"),
        subjects=[
            client.V1Subject(kind="ServiceAccount", name="admin-user", namespace=namespace)
        ],
        role_ref=client.V1RoleRef(kind="ClusterRole", name="admin-role", api_group="")
    )
    try:
        rbac_api.create_cluster_role_binding(role_binding)
        print("ClusterRoleBinding 'admin-role-binding' created successfully.")
    except client.exceptions.ApiException as e:
        print(f"Failed to create ClusterRoleBinding: {e}")

# Step 4: Main Logic to Set Up Admin User
if __name__ == "__main__":
    namespace = "default"  # Namespace where the service account will be created

    # Prompt user for host and configure kubeconfig
    server_url = get_server_url()
    
    # Load configuration with SSL verification disabled for self-signed certificates
    load_dynamic_kubeconfig(server_url, disable_ssl_verify=True)

    # Create resources
    create_cluster_role()
    create_service_account(namespace)
    create_role_binding(namespace)