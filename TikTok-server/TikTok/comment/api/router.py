from rest_framework.routers import DefaultRouter

from comment.api.views import CommentApiViewSet

router_comment = DefaultRouter()

router_comment.register(
    prefix="comment", basename='comment', viewset=CommentApiViewSet)
