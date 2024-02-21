from django.urls import path
from .views import *


urlpatterns = [
        path('Files/<str:filename>/', FileDownloadView.as_view(), name='file-download'),
        path("get_all/" , VideoFileListView.as_view()),
        path("get_ids/" , GivenIdsView.as_view()),
        path("set_id/" , SetId.as_view()),
        path("get_frame/<int:pk>", RetrieveFrameView.as_view()),
        path("get_frame_by_id/<int:pk>" , GetFramesByIdView.as_view()),
        path("delete_frame_id/<int:pk>", DeleteGivenIdAPIView.as_view()),
        path("delete_given_id/<int:pk>" , DeleteGivenId.as_view()),
        path('' , index ),

]   