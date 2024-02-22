from django.db import models
import os
import shutil
from django.db.models.signals import pre_delete
from django.dispatch import receiver
from django.conf import settings

class VideoFile(models.Model):
    video_file = models.CharField(max_length=100)
    directory_name = models.CharField(max_length=100 , blank=True , null=True)

    
@receiver(pre_delete, sender=VideoFile)
def delete_directory(sender, instance, **kwargs):
    # Delete the associated directory
    media_directory = settings.MEDIA_ROOT
    print(media_directory)
    directory_path = os.path.join(media_directory, instance.directory_name)
    if os.path.exists(directory_path):
        shutil.rmtree(directory_path)
class GivenId(models.Model):
    id_name = models.CharField(max_length = 50)



class Frame(models.Model):
    video_file = models.ForeignKey(VideoFile, on_delete=models.CASCADE, related_name='frames')
    x1 = models.IntegerField()
    y1 = models.IntegerField()
    width = models.IntegerField()
    height = models.IntegerField()
    original_image = models.CharField(max_length=100)
    given_id =models.ForeignKey(GivenId, on_delete=models.SET_NULL, related_name='frames', null=True , blank=True)
    comment=models.TextField(blank=True , null=True)


