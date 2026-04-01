import os
import re

def fix_image_extensions():
    # Directory to search
    base_dir = "."
    
    # Regex to find /images/... with .jpg, .jpeg, or .png
    # Matches /images/something.jpg or /images/something.png etc.
    # Group 1: path up to extension
    # Group 2: extension
    pattern = re.compile(r'(/images/[\w\d\-._/]+)\.(jpg|jpeg|png)', re.IGNORECASE)
    
    for root, dirs, files in os.walk(base_dir):
        if any(s in root for s in [".git", ".vercel", "node_modules"]):
            continue
            
        for file in files:
            if file.endswith(".html"):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, "r", encoding="utf-8") as f:
                        content = f.read()
                except UnicodeDecodeError:
                    continue
                
                new_content = pattern.sub(r'\1.webp', content)
                
                if new_content != content:
                    print(f"Fixed: {file_path}")
                    with open(file_path, "w", encoding="utf-8") as f:
                        f.write(new_content)

if __name__ == "__main__":
    fix_image_extensions()
