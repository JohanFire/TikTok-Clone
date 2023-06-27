from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.response import Response

from video.models import Video, VideoLike
from video.api.serializers import (
    VideoSerializer,
    VideoActionsSerializer,
    VideoLikeSerializer
)
from follow.models import Follow


class VideoApiViewSet(ModelViewSet):
    # who will be able to get this info? only logged users
    permission_classes = [IsAuthenticated]
    serializer_class = VideoSerializer
    queryset = Video.objects.all()
    http_method_names = ['get', 'post']
    filter_backends = [OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['user']
    ordering = ['-created_at']  # ['-'] = mayor a menor = newer to older


class VideoActionsAPIViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = VideoActionsSerializer
    queryset = Video.objects.all()
    http_method_names = ["put"]


class VideoLikeApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = VideoLikeSerializer
    queryset = VideoLike.objects.all()
    http_method_names = ['get', 'post', 'delete']
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user', 'video']


class GetFollowingVideosView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        following = Follow.objects.filter(user=user).values_list(
            'user_followed', flat=True
        )
        following_ids = list(following)

        videos_following = Video.objects.filter(
            user__in=following_ids
        ).order_by("--created_at")

        videos_following_serializer = VideoSerializer(
            data=videos_following, many=True
        )
        videos_following_serializer.is_valid()

        data = videos_following_serializer.data()

        return Response(data)
