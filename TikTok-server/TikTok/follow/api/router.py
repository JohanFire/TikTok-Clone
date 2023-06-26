from rest_framework.routers import DefaultRouter

from follow.api.views import FollowApiViewSet

router_follow = DefaultRouter()
router_follow.register(prefix="follow", basename="follow", viewset=FollowApiViewSet)