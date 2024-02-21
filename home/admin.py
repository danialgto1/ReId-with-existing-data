from django.contrib import admin
from .models import VideoFile, Frame , GivenId

admin.site.register(VideoFile)
admin.site.register(Frame)
admin.site.register(GivenId)