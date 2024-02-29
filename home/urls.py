from django.urls import path
from .views import *


urlpatterns = [
        path("get_all/" , VideoFileListView.as_view()),
        path("get_ids/" , GivenIdsView.as_view()),
        path("get_frame/<int:pk>", RetrieveFrameView.as_view()),
        path("get_frame_by_id/<int:pk>" , GetFramesByIdView.as_view()),
        path("delete_frame_id/<int:pk>", DeleteGivenIdAPIView.as_view()),
        path("delete_given_id/<int:pk>" , DeleteGivenId.as_view()),
        path("upload_file/", UploadFile.as_view() ),
        path("get_originals_image",GetAllOriginalImages.as_view()),
        path("filter_by_original_files/<str:original_image>" , GetDataByOriginalImage.as_view()),
        path("get_commented_frames/<str:video_file>", GetCommentedFrame.as_view() ),
        path("get_status_frame/<int:status>/<str:video_file>" , GetStatusView.as_view()),
        path("create_new_id/" , CreateNewId.as_view()),
        path("get_videos/", GetVideos.as_view()),
        path("retrieve_video/<str:video_file>",RetrieveVideoFile.as_view()),
        path("upload_video/" , UploadVideo.as_view()),
        path('' , index ),

]   