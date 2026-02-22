import os

# Files to fix
assets_to_fix = {
    "/assets/modulepreload-polyfill-B5Qt9EMX.js": "/assets/modulepreload-polyfill-b5qt9emx.js",
    "/assets/main-BOeoqLYB.js": "/assets/main-boeoqlyb.js",
    "/assets/style-Dp_sgBV8.css": "/assets/style-dp_sgbv8.css",
    "/assets/admin-COFBYfaS.js": "/assets/admin-cofbyfas.js"
}

# Traverse directories
for root, dirs, files in os.walk("."):
    # Skip system folders
    if any(s in root for s in [".git", ".vercel", "node_modules"]):
        continue
    
    for file in files:
        if file.endswith(".html"):
            file_path = os.path.join(root, file)
            with open(file_path, "r", encoding="utf-8") as f:
                content = f.read()
            
            original_content = content
            for old, new in assets_to_fix.items():
                content = content.replace(old, new)
            
            if content != original_content:
                print(f"Fixed: {file_path}")
                with open(file_path, "w", encoding="utf-8") as f:
                    f.write(content)
