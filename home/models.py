from django.db import models

class VideoFile(models.Model):
    video_file = models.CharField(max_length=100)

class GivenId(models.Model):
    id_name = models.CharField(max_length = 50)



class Frame(models.Model):
    video_file = models.ForeignKey(VideoFile, on_delete=models.CASCADE, related_name='frames')
    x1 = models.IntegerField()
    y1 = models.IntegerField()
    width = models.IntegerField()
    height = models.IntegerField()
    original_image = models.CharField(max_length=100)
    given_id =models.ForeignKey(GivenId, on_delete=models.CASCADE, related_name='frames', null=True , blank=True)


