import os
import socket
import hashlib
import getpass
import psutil
from flask import Flask, jsonify, request

# Flask app for admin API
app = Flask(__name__)

def generate_unique_id(ip, hostname):
    # Combine host IP and hostname, and hash them for uniqueness
    data = f"{ip}-{hostname}"
    unique_id = hashlib.sha256(data.encode()).hexdigest()
    return unique_id

def authenticate_admin():
    # Prompt user for admin credentials
    username = input("Enter administrator username: ")
    password = getpass.getpass("Enter administrator password: ")
    # Perform credential validation (example only, implement your own logic)
    if username == "admin" and password == "securepassword":
        print("Admin authenticated successfully!")
        return True
    else:
        print("Authentication failed!")
        return False

def access_root_files():
    # Access root files (example: read system info)
    try:
        with open('/etc/hostname', 'r') as f:
            print(f.read())
    except PermissionError:
        print("Permission denied. Run as root.")

def process_monitoring():
    # Monitor running processes and assign unique IDs
    processes = []
    for proc in psutil.process_iter(['pid', 'name']):
        process_id = hashlib.md5(str(proc.info['pid']).encode()).hexdigest()
        processes.append({'pid': proc.info['pid'], 'name': proc.info['name'], 'unique_id': process_id})
    return processes

@app.route('/api/processes', methods=['GET'])
def get_processes():
    # API endpoint to return monitored processes
    return jsonify(process_monitoring())

if __name__ == "__main__":
    # Authenticate admin
    if authenticate_admin():
        # Generate and display the unique ID
        host_ip = socket.gethostbyname(socket.gethostname())
        host_name = socket.gethostname()
        unique_id = generate_unique_id(host_ip, host_name)
        print(f"Unique Server ID: {unique_id}")

        # Access root files
        access_root_files()

        # Start Flask API for centralized communication
        app.run(host="0.0.0.0", port=8080)