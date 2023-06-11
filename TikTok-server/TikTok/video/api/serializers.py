from rest_framework.serializers import ModelSerializer

from video.models import Video

class VideoSerializer(ModelSerializer):
    class Meta:
        model = Video
        fields = ['id', 'description', 'video', 'image', 'user',
                    'created_at', "shared_counter", "likes_counter"]
