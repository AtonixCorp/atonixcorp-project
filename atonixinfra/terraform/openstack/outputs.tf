output "instance_ip" {
  value = openstack_compute_instance_v2.demo.access_ip_v4
}