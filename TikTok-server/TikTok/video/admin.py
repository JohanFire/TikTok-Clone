from django.contrib import admin
from video.models import Video, VideoLike

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'created_at', 'description')

@admin.register(VideoLike)
class VideoLikeAdmin(admin.ModelAdmin):
    list_display = ("id", "user", "video", "created_at")