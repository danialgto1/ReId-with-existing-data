import cv2
from ultralytics import YOLO
import os
import json
import subprocess
import numpy as np
import torch
import tempfile
from home.add_json_to_db import import_json


# os.sys("gdown --id 11h3eikQIyTs-LLepjP6JHwzoX1aU7h-T")

# Detection model and output is bounding boxes
model_path="Dog_ours.pt"
#model_path="yolov8x.pt"
model = YOLO(model_path, task="detect")

# Pose estimation
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')




def convert_video(input_file, output_file, codec='h264', bitrate='1024k'):
    # Check if input file exists
    if not os.path.exists(input_file):
        print("Input file does not exist.")
        return

    # Remove existing output file if present
    if os.path.exists(output_file):
        os.remove(output_file)

    # Build ffmpeg command
    ffmpeg_cmd = [
        'ffmpeg',
        '-i', input_file,
        '-c:v', codec,
        '-b:v', bitrate,
        output_file
    ]

    # Execute ffmpeg command
    try:
        subprocess.run(ffmpeg_cmd, check=True)
        print("Conversion successful.")
    except subprocess.CalledProcessError as e:
        print("Conversion failed:", e)



def run(video_file,frame_limit=np.inf,frame_gap=0):
  
  vid_path=f"{video_file.name[:-4]}"
  directory = os.path.join("Files" , vid_path)
  os.makedirs("zip_files" ,exist_ok=True)
  video_bytes = video_file.read()
  temp_file = tempfile.NamedTemporaryFile(suffix='.mp4', delete=False)
  temp_file.write(video_bytes)
  temp_file.close()
  cap = cv2.VideoCapture(temp_file.name)
  num_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
  print(num_frames)
  if ".MP4" in vid_path:
    vid_path=f"{vid_path[:-4]}.mp4"
  try:
    os.mkdir(directory)
    os.mkdir(f"{directory}/images")
    os.mkdir(f"{directory}/video")
  except:
    pass
  count=0
  pcount=0

  data={"video_file": f'{vid_path}.mp4', "frames":[]}

  width  = cap.get(cv2.CAP_PROP_FRAME_WIDTH)   # float `width`
  height = cap.get(cv2.CAP_PROP_FRAME_HEIGHT)  # float `height`
  fps = cap.get(cv2.CAP_PROP_FPS)  # float `fps`
  print(f'{directory}/video/{vid_path}.mp4')
  out = cv2.VideoWriter(f'{directory}/video/{vid_path}.MP4', cv2.VideoWriter_fourcc('m','p','4','v'), int(fps), (int(width), int(height)), True)

  while pcount<frame_limit:
      count+=1
      _ , img =cap.read()
      if count%frame_gap!=0:
        continue
      pcount+=1


      if img is None:
          break

      cv2.imwrite(f"{directory}/images/{os.path.basename(vid_path)}_{count}.jpg",img)
      out.write(img)
      draw_img=img.copy()

      # Get bounding box and confidence score
      if model_path=="Dog_ours.pt":
        res = model.predict(img, conf=0.25)[0].boxes
      elif model_path=="yolov8x.pt":
        res = model.predict(img, conf=0.15, classes=[16, 17, 18])[0].boxes

      if len(res) != 0:
          data[f"{vid_path}"]=[]
          dogs = res.xyxy.cpu().numpy().astype(int)
          confs = res.conf.cpu().numpy().astype(float)
          cach = []
          for dog, conf in zip(dogs, confs):
              x1, y1, x2, y2 = dog
              cach.append([x1, y1, x2, y2, conf])
              data["frames"].append({"x1":int(x1),"y1":int(y1),"width":int(x2-x1),"height":int(y2-y1),
                                      "original_image":f"{os.path.basename(vid_path)}_{count}.jpg"})

  with open(f"{directory}/{vid_path}.json","w") as f:
    json.dump([data], f)
  #shutil.copy(vid_path,"video")
  print(f"zip_files/{os.path.basename(vid_path)}","zip",f"{directory}")
  os.unlink(temp_file.name)
  cap.release()
  out.release()
  if len(data["frames"])==0:
    raise Exception("could not find any frame")

  # Example usage:
  input_file = f'{directory}/video/{vid_path}.MP4'
  output_file = f'{directory}/video/{vid_path}.mp4'
  convert_video(input_file, output_file)
  os.remove(input_file)
  print("dir is",directory)
  print("upl is",vid_path)
  import_json(media_path=directory , directory_name=vid_path)
  # zipped_file = shutil.make_archive(f"zip_files/{os.path.basename(vid_path)}","zip",f"{directory}")
  # os.remove(f"{os.path.basename(vid_path)[:-4]}/{os.path.basename(vid_path)}.json")
  # shutil.rmtree(os.path.basename(vid_path)[:-4])
  
  
  """
  with zipfile.ZipFile(f"zip_files/{os.path.basename(vid_path)}.zip", 'w') as zipf:
      # Add file to the zip
      zipf.write(f"{os.path.basename(vid_path)}.json")

      # Add folders to the zip
      zipdir(f"{os.path.basename(vid_path)[:-5]}/images", zipf)
      zipdir(f"{os.path.basename(vid_path)[:-5]}/video", zipf)

  zipf.close()
  """


# run("/mnt/newdisk/newhome/ehsan/Downloads/1.mp4",frame_limit=50,frame_gap=100)