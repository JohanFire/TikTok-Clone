from django.urls import path
from rest_framework.routers import DefaultRouter

from follow.api.views import FollowApiViewSet, FollowingCountView, FollowersCountView

# model view routes, due class FollowApiViewSet(ModelViewSet):
router_follow = DefaultRouter()
router_follow.register(prefix="follow", basename="follow",
                        viewset=FollowApiViewSet)


# Api view routes, due class FollowingCountView(APIView):
urlpatterns = [
    path('follow/following/count/<int:id_user>/', FollowingCountView.as_view()),
    path('follow/followers/count/<int:id_user>/', FollowersCountView.as_view()),
]
