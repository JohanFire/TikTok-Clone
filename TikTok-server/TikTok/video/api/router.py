from rest_framework.routers import DefaultRouter

from video.api.views import VideoApiViewSet

router_video = DefaultRouter()

router_video.register(prefix="video", basename="video",
                        viewset=VideoApiViewSet)
