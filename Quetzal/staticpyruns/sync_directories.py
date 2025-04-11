import os
import shutil

# Source and destination paths
source_dir = "/home/atonixdevmaster/atonixcorpvm/atonixcorp/Workshop/atonixforge/build"
destination_dir = "/home/atonixdevmaster/var/www/html/build"

def sync_directories(source, destination):
   
    if not os.path.exists(source):
        print(f"Error: Source directory '{source}' does not exist.")
        return 

    if not os.path.exists(destination):
        os.makedirs(destination)  
        print(f"Created destination directory: {destination}")
    
    for item in os.listdir(source):
        source_path = os.path.join(source, item)
        destination_path = os.path.join(destination, item)

        if os.path.isdir(source_path):
           
            print(f"Found directory: {source_path}")
            sync_directories(source_path, destination_path)
        else:
           
            if not os.path.exists(destination_path):
                shutil.copy2(source_path, destination_path)
                print(f"Copied new file: {source_path} -> {destination_path}")
            elif os.path.getmtime(source_path) > os.path.getmtime(destination_path):
                shutil.copy2(source_path, destination_path)
                print(f"Updated file: {source_path} -> {destination_path}")

# Perform the synchronization
print(f"Starting synchronization from {source_dir} to {destination_dir}...")
sync_directories(source_dir, destination_dir)
print("Synchronization complete.")

# This script is designed to synchronize the contents of a source directory with a destination directory.
# It will copy new files and update existing files based on their modification times.
# It will also create the destination directory if it does not exist.
# The script processess use cron job to run every hour @ "0 * * * *"
# The script uses the os and shutil modules to handle file operations.