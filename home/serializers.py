from rest_framework import serializers
from .models import VideoFile, Frame, GivenId




class GivenIdSerializer(serializers.ModelSerializer):
    class Meta:
        model = GivenId
        fields="__all__"
        
class FrameSerializer(serializers.ModelSerializer):
    given_id=serializers.SerializerMethodField()
    
    class Meta:
        model = Frame
        exclude = ["video_file"]
    
    def get_given_id(self,obj):
        if obj.given_id:
            return obj.given_id.id_name
        else: return None

class GetFrameByIdSerializer(serializers.ModelSerializer):
    frames= FrameSerializer(many=True , read_only=True)
    class Meta:
        model=GivenId
        fields = ["id_name" , "frames"]

class VideoFileSerializer(serializers.ModelSerializer):
    frames = FrameSerializer(many=True, read_only=True)

    class Meta:
        model = VideoFile
        fields = ['video_file', 'frames']

