from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from video.models import Video
from video.api.serializers import VideoSerializer, VideoActionsSerializer


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