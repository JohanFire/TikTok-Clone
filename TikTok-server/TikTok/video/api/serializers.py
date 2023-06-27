from rest_framework.serializers import ModelSerializer

from video.models import Video, VideoLike
from users.api.serializers import UserSerializer

class VideoSerializer(ModelSerializer):
    user_data = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Video
        fields = ['id', 'description', 'video', 'image', 'user', 'user_data',
                    'created_at', "shared_counter", "likes_counter"]    

class VideoActionsSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = ['shared_counter', 'likes_counter']

class VideoLikeSerializer(ModelSerializer):
    video_data = VideoSerializer(source='video', read_only=True)

    class Meta:
        model = VideoLike
        fields = ['id', 'user', 'video', 'video_data','created_at']

class VideoNotificationSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'image']