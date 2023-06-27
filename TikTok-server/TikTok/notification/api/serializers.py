from rest_framework.serializers import ModelSerializer
from users.api.serializers import UserSerializer

from notification.models import Notification
from video.api.serializers import VideoNotificationSerializer

class NotificationSerializer(ModelSerializer):
    user_follower_data = UserSerializer(source="user_ follower", read_only=True)
    video_data = VideoNotificationSerializer(source="video", read_only=True)

    class Meta:
        model = Notification

        fields = ['id', 'user', 'user_follower', 'user_follower_data',
                    'video', 'video_data',
                    'type_notification', 'comment',
                    'read', 'created_at'
                ]
