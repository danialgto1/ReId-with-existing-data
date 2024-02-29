from rest_framework import serializers
from .models import VideoFile, Frame, GivenId


class UploadZipSerializer(serializers.Serializer):
    file = serializers.FileField()

class GivenIdSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = GivenId
        fields="__all__"

def ReturnIds():
    all_given_ids = GivenId.objects.all()
    result = {}
    result["all"] = GivenIdSerializer(all_given_ids, many=True).data
    unique_ids_video_files = all_given_ids.values_list("frames__video_file__video_file", flat=True).distinct()
    for unique_id in unique_ids_video_files:
        ids = GivenId.objects.filter(frames__video_file__video_file=unique_id).distinct()
        srz_data = GivenIdSerializer(ids, many=True).data
        result[unique_id] = srz_data
    unique_ids_location = all_given_ids.values_list("location", flat=True).distinct()
    for  location in unique_ids_location:
        ids = GivenId.objects.filter(location = location).distinct()
        srz_data = GivenIdSerializer(ids, many=True).data
        result[location] = srz_data
    return result
            
class SortedGivenIdSerializer(serializers.ModelSerializer):
    ids = serializers.SerializerMethodField()

    class Meta:
        model = GivenId
        fields = ["ids"]

    def get_ids(self, obj):
        all_given_ids = GivenId.objects.all()
        unique_ids_video_files = all_given_ids.values_list("frames__video_file__video_file", flat=True).distinct()
        result = {}
        for unique_id in unique_ids_video_files:
            ids = GivenId.objects.filter(frames__video_file__video_file=unique_id).distinct()
            srz_data = GivenIdSerializer(ids, many=True).data
            result[unique_id] = srz_data
        result["all"] = GivenIdSerializer(GivenId.objects.all(), many=True).data
        return result
        
class UniqueOriginalImagesSerializer(serializers.ModelSerializer):
    original_images = serializers.SerializerMethodField()

    class Meta:
        model = Frame
        fields = ['original_images']

    def get_original_images(self, obj):
        frames = Frame.objects.all()
        unique_images = frames.values_list('original_image', flat=True)
        return unique_images    
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
        fields = "__all__"

class VideoFileSerializer(serializers.ModelSerializer):
    frames = FrameSerializer(many=True, read_only=True)

    class Meta:
        model = VideoFile
        fields = "__all__"


class GetAllVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoFile
        fields = "__all__"
        
class GetDirectoryByIdSerializer(serializers.ModelSerializer):
    directory = serializers.SerializerMethodField()
    
    class Meta:
        model = Frame
        fields = ["directory"]
    
    def get_directory(self , obj):
        return obj.video_file.directory_name