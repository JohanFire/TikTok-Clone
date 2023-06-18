from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from video.models import Video, VideoLike
from video.api.serializers import VideoSerializer, VideoActionsSerializer, VideoLikeSerializer


class VideoApiViewSet(ModelViewSet):
    # who will be able to get this info? only logged users
    permission_classes = [IsAuthenticated]
    serializer_class = VideoSerializer
    queryset = Video.objects.all()
    http_method_names = ['get', 'post']
    filter_backends = [OrderingFilter, DjangoFilterBackend]
    filterset_fields = ['user']
    ordering = ['-created_at'] # ['-'] = mayor a menor = newer to older

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