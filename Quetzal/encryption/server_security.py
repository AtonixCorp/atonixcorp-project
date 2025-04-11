import getpass

# Mock dictionary for storing user credentials
users = {"admin": "password123"}  # Example: preset username and password

def authenticate_user():
    # Ask for username and password
    username = input("Enter administrator username: ")
    password = getpass.getpass("Enter administrator password: ")

    # Check if user exists and password matches
    if username in users and users[username] == password:
        print("Authentication successful!")
    else:
        print("Authentication failed!")
        create_new_user_prompt()

def create_new_user_prompt():
    choice = input("Would you like to create a new user? (yes/no): ").strip().lower()
    if choice == "yes":
        create_new_user()
    else:
        print("Exiting program.")

def create_new_user():
    new_username = input("Enter new username: ")
    if new_username in users:
        print("Username already exists. Try again.")
        return
    
    new_password = getpass.getpass("Enter new password: ")
    confirm_password = getpass.getpass("Confirm new password: ")
    
    if new_password == confirm_password:
        users[new_username] = new_password
        print(f"User '{new_username}' has been created successfully!")
    else:
        print("Passwords do not match. Try again.")

# Run the authentication process
authenticate_user()

# This code is a simple user authentication system that allows an administrator to log in
# and create new users. It uses a mock dictionary to store user credentials.