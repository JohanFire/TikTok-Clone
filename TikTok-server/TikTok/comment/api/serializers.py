from rest_framework.serializers import ModelSerializer

from comment.models import Comment
from users.api.serializers import UserSerializer

class CommentSerializer(ModelSerializer):
    user_data = UserSerializer(source='user', read_only=True)

    class Meta:
        model = Comment
        fields = ['id', 'text', 'user', 'user_data', 'video', 'created_at']