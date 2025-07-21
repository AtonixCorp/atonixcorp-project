terraform {
  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "2.37.1"
    }
  }

  cloud {
    organization = "AtonixCorp-Project"

    workspaces {
      name = "atonixcorpvm"
    }
  }
}

provider "kubernetes" {
  config_path = "~/.kube/config"

}
