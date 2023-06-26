from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend

from follow.models import Follow
from follow.api.serializers import FollowSerializer

class FollowApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = FollowSerializer
    queryset = Follow.objects.all()
    http_method_names = ["get", "post", "delete"]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user', 'user_followed']