from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView , RetrieveAPIView , RetrieveUpdateAPIView , UpdateAPIView ,DestroyAPIView
from rest_framework.response import Response
import os
from rest_framework import status
from .models import VideoFile , GivenId,Frame
from .serializers import *
from .upload_file import handle_upload
from django.db.models import Q
from home.utils import run
from rest_framework.status import HTTP_400_BAD_REQUEST
class GetVideos(ListCreateAPIView):
    queryset=VideoFile.objects.all()
    serializer_class=GetAllVideoSerializer
class DeleteGivenIdAPIView(UpdateAPIView):
    queryset=Frame.objects.all()
    serializer_class= FrameSerializer
    lookup_field="pk"
    
    def put(self, requet , *args, **kwargs):
        instance = self.get_object()
        instance.given_id = None  # Set given_id field to None
        instance.save()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)

class VideoFileListView(APIView):
    def get(self, request):
        video_files = VideoFile.objects.all()
        serializer = VideoFileSerializer(video_files, many=True)
        return Response(serializer.data)
    
class RetrieveVideoFile(RetrieveAPIView):
    queryset=VideoFile.objects.all()
    serializer_class=VideoFileSerializer
    lookup_field="video_file"

    
class CreateNewId(ListCreateAPIView):
    serializer_class= GivenIdSerializer
    queryset = GivenId.objects.all()
    
class GivenIdsView(ListCreateAPIView):
    serializer_class = SortedGivenIdSerializer
    queryset= GivenId.objects.all()

class GetAllIds(APIView):
    def get(self, request):
        return Response(ReturnIds())
    
class GetFramesByIdView(RetrieveUpdateAPIView):
    serializer_class = GetFrameByIdSerializer
    queryset = GivenId.objects.all()
    lookup_field="pk"
    
 

class DeleteGivenId(DestroyAPIView):
    serializer_class=GivenIdSerializer
    queryset=GivenId.objects.all()
    lookup_field="pk"
        
class GetAllOriginalImages(APIView):
    def get(self, request, format=None):
        frames = Frame.objects.all()
        serializer = UniqueOriginalImagesSerializer(frames)
        return Response(serializer.data)
        
class GetDataByOriginalImage(APIView):
    def get(self,request,original_image):
        frames= Frame.objects.filter(original_image=original_image)
        video_file = frames[0].video_file
        frames_data = FrameSerializer(instance=frames , many=True).data
        data = {
            "id":video_file.id,
            "video_file": video_file.video_file,
            "directory_name": video_file.directory_name,
            "frames":list(frames_data)
        }
        return Response(data)

class GetCommentedFrame(APIView):
    def get(self , request , video_file):
        video = VideoFile.objects.filter(video_file=video_file)[0]
        all_frame = Frame.objects.filter(video_file = video)
        commented_frames = all_frame.exclude(Q(comment__isnull=True) | Q(comment__exact=''))
        frames = []
        
        for frame in commented_frames:
            frames.append(FrameSerializer(frame).data)
        srzdata = {
            "id":frame.video_file.id,
            "video_file":frame.video_file.video_file,
            "directory_name":frame.video_file.directory_name,
            "frames":frames
        }
        return Response(srzdata)

class GetStatusView(APIView):
    def get(self , request , status, video_file):
        video = VideoFile.objects.get(video_file=video_file)
        all_frame = Frame.objects.filter(video_file = video)
        commented_frames = all_frame.filter(status=status)
        print(len(commented_frames))
        frames = FrameSerializer(commented_frames , many=True).data
        
        srzdata = {
            "frames":frames
        }
        return Response(srzdata)


class RetrieveFrameView(RetrieveUpdateAPIView):
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer
    lookup_field = 'pk'
    
    def update(self, request, *args, **kwargs):
        data = request.data
        instance = self.get_object()
        
        given_id_id = data.get("id_name")
        
        if given_id_id is not None:
        
            try:
                given_id = GivenId.objects.get(id_name=given_id_id)
            except GivenId.DoesNotExist:
                return Response("GivenId does not exist", status=status.HTTP_400_BAD_REQUEST)

            instance.given_id = given_id
            instance.save()

        # Optionally, return the updated data in the response
        response = super().update(request, *args, **kwargs)
        return response
 
        
class UploadFile(APIView):
    def post(self , request):
        serializer = UploadZipSerializer(data=request.data)
        if serializer.is_valid():
            uploaded_file = serializer.validated_data['file']
            handle_upload(uploaded_file)
            
            return Response({'status': 'Zip file uploaded and extracted successfully'}, status=status.HTTP_201_CREATED)
from django.shortcuts import render


class UploadVideo(APIView):
    def post(self,request):
        serializer = UploadZipSerializer(data=request.data)
        if serializer.is_valid():
            uploaded_file = serializer.validated_data['file']
            try:
                run (uploaded_file)
                return Response({'status': 'Video file uploaded and extracted successfully'}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response (str(e) , status=HTTP_400_BAD_REQUEST)
        return Response("False")

class GetDirectoryByFrameId(RetrieveAPIView):
    serializer_class = GetDirectoryByIdSerializer
    queryset = Frame.objects.all()
    lookup_field = "pk"

         
def index(request):
    return render(request, 'index.html')