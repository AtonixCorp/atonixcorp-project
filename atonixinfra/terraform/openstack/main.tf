resource "openstack_compute_instance_v2" "admin" {
  name            = "atonixcorpvm"
  image_name      = "Debian 12"
  flavor_name     = "m1.small"
  key_pair        = "your-keypair"
  security_groups = ["default"]

  network {
    name = "private"
  }
}