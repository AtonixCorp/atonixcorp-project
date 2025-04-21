import os
import yaml
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

def load_config():
    with open("settings.yaml", "r") as file:
        config = yaml.safe_load(file)

    # Replace placeholders with actual environment variables
    for section in config:
        for key, value in config[section].items():
            if isinstance(value, str) and value.startswith("${"):
                env_var = value.strip("${}")
                config[section][key] = os.getenv(env_var, "MISSING_ENV_VAR")

    return config

settings = load_config()
print(settings["database"]["mysql"]["host"])  # Output: MySQL host from .env
print(settings["database"]["postgres"]["url"])  # Output: PostgreSQL URL from .env