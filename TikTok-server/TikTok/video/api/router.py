from rest_framework.routers import DefaultRouter
from django.urls import path

from video.api.views import (
    VideoApiViewSet, 
    VideoActionsAPIViewSet, 
    VideoLikeApiViewSet,
    GetFollowingVideosView
)

router_video = DefaultRouter()

router_video.register(prefix="video", basename="video",
                        viewset=VideoApiViewSet)
router_video.register(prefix="video/actions", basename="video",
                        viewset=VideoActionsAPIViewSet)
router_video.register(prefix="video_like", basename='video',
                        viewset=VideoLikeApiViewSet)

urlpatterns = [
    path('folowing_videos/', GetFollowingVideosView.as_view())
]