import json
from home.models import VideoFile , Frame


with open("Files/new.json" , "r") as file:
    data = json.load(file)

for item in data:
    # Create a VideoFile instance
    video_file_instance = VideoFile.objects.create(video_file=item['video_file'])
    
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