from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from notification.models import Notification
from notification.api.serializers import NotificationSerializer

class NotificationApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = NotificationSerializer
    queryset = Notification.objects.all()
    http_method_names = ['get', 'post', 'patch']
    filter_backends = [DjangoFilterBackend, OrderingFilter]
    filterset_fields = ['user', 'read']
    ordering = ['-created_at']