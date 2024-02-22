import os
import shutil
import zipfile
from random import randint
from .add_json_to_db import import_json


def handle_upload(uploaded_file):
    random_number = randint(1000, 9999)
    media_directory = 'Files'  # Or specify your desired directory here
    file_name = uploaded_file.name.split(".")[0]
    directory_name = f"{random_number}_{file_name}"
    media_path = os.path.join(media_directory,directory_name )
    
    # Extract the zip file
    with zipfile.ZipFile(uploaded_file, 'r') as zip_ref:
        zip_ref.extractall(media_path)

    import_json(media_path , directory_name)
    
    
    # Return the path where the file is extracted
    return media_path
