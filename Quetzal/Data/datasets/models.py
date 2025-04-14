from datasets import load_dataset
from tqdm import tqdm

# Load OpenCodeReasoning splits
ocr_ds_split_0 = load_dataset("nvidia/OpenCodeReasoning", "split_0")
ocr_ds_split_1 = load_dataset("nvidia/OpenCodeReasoning", "split_1")

# Load external datasets
datasets = {
    "taco": load_dataset("BAAI/TACO"),
    "apps": load_dataset("codeparrot/apps")
}

# Iterate through data in split_1
for item in tqdm(ocr_ds_split_1["train"]):
    # Ensure required fields are present
    if "input" in item and item["dataset"] in ["taco", "apps"]:
        item["input"] = datasets[item["dataset"]][item["split"]][int(item["index"])]["question"]