#!/bin/bash

echo "Enter the username for the new user:"
read username

# Create the user
useradd -m -s /bin/bash $username
echo "$username ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

echo "User $username created successfully!"
exec /bin/bash