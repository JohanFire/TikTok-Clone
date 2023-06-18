import os
from django.db import models

def get_video_path(instance, fileName):
    ext = fileName.split(".")[-1]
    fileName = "%s.%s" % (instance.id, ext)

    return os.path.join('video/', fileName)


def get_image_path(instance, fileName):
    ext = fileName.split(".")[-1]
    fileName = "%s.%s" % (instance.id, ext)

    return os.path.join('video_image/', fileName)

class Video(models.Model):
    description = models.TextField()
    video = models.FileField(upload_to=get_video_path)
    image = models.ImageField(upload_to=get_image_path)
    # if user get deleted, also delete their videos stuff
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    shared_counter = models.IntegerField(default=0)
    likes_counter = models.IntegerField(default=0)

class VideoLike(models.Model):
    user = models.ForeignKey('users.User', on_delete=models.CASCADE)
    video = models.ForeignKey('video.Video', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)