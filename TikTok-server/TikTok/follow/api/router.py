from django.urls import path
from rest_framework.routers import DefaultRouter

from follow.api.views import FollowApiViewSet, FollowedsCountView

# model view routes, due class FollowApiViewSet(ModelViewSet):
router_follow = DefaultRouter()
router_follow.register(prefix="follow", basename="follow",
                        viewset=FollowApiViewSet)


# Api view routes, due class FollowedsCountView(APIView):
urlpatterns = [
    path('follow/followeds/count/<int:id_user>/', FollowedsCountView.as_view())
]
