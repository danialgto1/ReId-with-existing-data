import json
from home.models import VideoFile , Frame
import glob
import os

def find_json_files(directory):
    # Construct the search pattern to find JSON files
    search_pattern = os.path.join(directory, '*.json')
    
    # Use glob to find files matching the search pattern
    json_files = glob.glob(search_pattern)
    
    return json_files[0]


def import_json(media_path , directory_name):
    json_file =find_json_files(media_path)
    with open(json_file , "r") as file:
        data = json.load(file)

    for item in data:
        # Create a VideoFile instance
        video_file_instance = VideoFile.objects.create(video_file=item['video_file'] , directory_name=directory_name)
        
        # Iterate over frames and create Frame instances
        for frame_data in item['frames']:
            Frame.objects.create(
                video_file=video_file_instance,
                x1=frame_data['x1'],
                y1=frame_data['y1'],
                width=frame_data['width'],
                height=frame_data['height'],
                original_image=frame_data['original_image'],
            )
    # Example usage: