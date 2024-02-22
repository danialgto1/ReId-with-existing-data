from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView , RetrieveAPIView , RetrieveUpdateAPIView , UpdateAPIView ,DestroyAPIView
from rest_framework.response import Response
import os
from rest_framework import status
from .models import VideoFile , GivenId,Frame
from .serializers import VideoFileSerializer, GivenIdSerializer,FrameSerializer ,GetFrameByIdSerializer , UploadZipSerializer
from .upload_file import handle_upload

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
    

    
class GivenIdsView(ListCreateAPIView):
    serializer_class=GivenIdSerializer
    queryset=GivenId.objects.all()
    
class GetFramesByIdView(RetrieveUpdateAPIView):
    serializer_class = GetFrameByIdSerializer
    queryset = GivenId.objects.all()
    lookup_field="pk"
    
 

class DeleteGivenId(DestroyAPIView):
    serializer_class=GivenIdSerializer
    queryset=GivenId.objects.all()
    lookup_field="pk"
        

class RetrieveFrameView(RetrieveUpdateAPIView):
    queryset = Frame.objects.all()
    serializer_class = FrameSerializer
    lookup_field = 'pk'
    
    def update(self, request, *args, **kwargs):
        data = request.data
        instance = self.get_object()
        
        given_id_id = data.get("givenId")
        
        if given_id_id is None:
            return Response("givenId is required", status=status.HTTP_400_BAD_REQUEST)
        
        try:
            given_id = GivenId.objects.get(id=given_id_id)
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

def index(request):
    return render(request, 'index.html')