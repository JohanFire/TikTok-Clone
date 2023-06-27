from rest_framework.routers import DefaultRouter
from notification.api.views import NotificationApiViewSet

router_notification = DefaultRouter()

router_notification.register(
    prefix='notification',
    basename='notification',
    viewset=NotificationApiViewSet
)
