from django.db import models

class Comment(models.Model):
    text = models.TextField();
    user = models.ForeignKey('users.User', on_delete=models.CASCADE);
    video = models.ForeignKey('video.Video', on_delete=models.CASCADE);
    created_at = models.DateTimeField(auto_now_add=True);