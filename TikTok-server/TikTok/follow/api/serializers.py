from rest_framework.serializers import ModelSerializer

from follow.models import Follow
from users.api.serializers import UserSerializer


class FollowSerializer(ModelSerializer):
    user_data = UserSerializer(source="user", read_only=True)
    user_followed_data = UserSerializer(source='user_followed', read_only=True)

    class Meta:
        model = Follow
        fields = ['id', 'user', 'user_data', 'user_followed',
                    'user_followed_data', 'created_at']
