# Configure Terraform Cloud
terraform {
  cloud {
    organization = "AtonixCorp"

    workspaces {
      name = "AtonixCorp"
    }
  }
}

