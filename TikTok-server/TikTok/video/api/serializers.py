from rest_framework.serializers import ModelSerializer

from video.models import Video
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