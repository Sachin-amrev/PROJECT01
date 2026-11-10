import os

# Specify the directory path
path = '/'  # Replace with your directory path

# List all files and directories in the specified path
contents = os.listdir(path)

# Print the contents
print("Contents of the directory:")
for item in contents:
    print(item)
