from django.http import HttpResponse
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.generics import ListCreateAPIView , RetrieveAPIView , UpdateAPIView ,DestroyAPIView
from rest_framework.response import Response
import os
from .models import VideoFile , GivenId,Frame
from .serializers import VideoFileSerializer, GivenIdSerializer,FrameSerializer ,GetFrameByIdSerializer


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
    
class SetId(APIView):
    def post(self, request):
        data = request.data
        print(data)
        frame = Frame.objects.get(id=data["id"])
        given_id = GivenId.objects.get(id=data["givenId"])
        frame.given_id = given_id  # Assign the given_id object to the frame's given_id attribute
        frame.save()  # Save the changes to the database
        print(frame.given_id.id_name)
        return Response("submitted")
            
    
class GivenIdsView(ListCreateAPIView):
    serializer_class=GivenIdSerializer
    queryset=GivenId.objects.all()
    
class GetFramesByIdView(RetrieveAPIView):
    serializer_class = GetFrameByIdSerializer
    queryset = GivenId.objects.all()
    lookup_field="pk"

class DeleteGivenId(DestroyAPIView):
    serializer_class=GivenIdSerializer
    queryset=GivenId.objects.all()
    lookup_field="pk"
        

class RetrieveFrameView(RetrieveAPIView):
    queryset = Frame.objects.all()
    serializer_class=FrameSerializer  
    lookup_field = 'pk'      
        
       
class FileDownloadView(APIView):
    def get(self, request, filename):
        # Define the path to the file within the media directory
        file_path = os.path.join(settings.MEDIA_URL, filename)

        # Check if the file exists
        if os.path.exists(file_path):
            # Open the file in binary mode for reading
            with open(file_path, 'rb') as file:
                # Create an HttpResponse object with the file content
                response = HttpResponse(file.read(), content_type='application/octet-stream')
                # Set the Content-Disposition header to force download
                response['Content-Disposition'] = f'attachment; filename="{filename}"'
                return response
        else:
            # Return a 404 Not Found response if the file does not exist
            return Response({'error': 'File not found.'}, status=404)

from django.shortcuts import render

def index(request):
    return render(request, 'index.html')