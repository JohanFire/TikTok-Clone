from rest_framework.routers import DefaultRouter

from video.api.views import VideoApiViewSet, VideoActionsAPIViewSet

router_video = DefaultRouter()

router_video.register(prefix="video", basename="video",
                        viewset=VideoApiViewSet)
router_video.register(prefix="video/actions", basename="video",
                        viewset=VideoActionsAPIViewSet)
