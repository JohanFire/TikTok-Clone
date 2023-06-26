from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.views import APIView
from rest_framework.response import Response

from follow.models import Follow
from follow.api.serializers import FollowSerializer

class FollowApiViewSet(ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = FollowSerializer
    queryset = Follow.objects.all()
    http_method_names = ["get", "post", "delete"]
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['user', 'user_followed']

class FollowedsCountView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, *args, **kwargs):
        id_user = kwargs['id_user']

        # db query to count how many users we follow
        count = Follow.objects.filter(user=id_user).count()
        
        return Response({'count': count})