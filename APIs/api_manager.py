from dotenv import load_dotenv
import os
import json

# Load Hugging Face token from .env
dotenv_path = os.path.join(os.path.dirname(os.path.dirname(__file__)), '.env')
load_dotenv(dotenv_path=dotenv_path)

huggingface_api_key = os.getenv("HUGGINFACE_API_KEY")
print(f"Your Hugging Face token is: {huggingface_api_key}")

# Check if the Hugging Face token is set
if huggingface_api_key is None:
    print("HUGGINFACE_API_KEY is not set in the .env file.")
else:
    print("HUGGINFACE_API_KEY is set.")

# Load Kaggle token using absolute path
kaggle_path = '/home/atonixdevmaster/.kaggle/kaggle.json'

try:
    with open(kaggle_path, 'r') as kaggle_file:
        kaggle_data = json.load(kaggle_file)
        kaggle_key = kaggle_data.get("key")
        print(f"Your Kaggle token is: {kaggle_key}")

        if kaggle_key is None:
            print("Kaggle API key is missing in the Kaggle.json file.")
        else:
            print("Kaggle API key is loaded successfully.")
except FileNotFoundError:
    print(f"Kaggle.json not found at {kaggle_path}. Please check the file path.")
except json.JSONDecodeError:
    print("Kaggle.json contains invalid JSON. Please verify its contents.")