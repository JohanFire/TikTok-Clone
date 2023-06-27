from django.db import models

NotificationTypeEnum = (
    ("FOLLOW", "follow"),
    ("COMMENT", "comment"),
    ("LIKE", "like"),
    ("SHARED", "shared"),
)

class Notification(models.Model):
    # who receives the notification
    user = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name="notification_user"
    )
    # who sends the notification
    user_follower = models.ForeignKey(
        'users.User',
        on_delete=models.CASCADE,
        related_name="notification_user_follower"
    )
    video = models.ForeignKey(
        'video.Video',
        on_delete=models.CASCADE,
        null=True, # not always will be video notification, maybe follow
        blank=True
    )
    type_notification = models.CharField(
        max_length=255,
        choices=NotificationTypeEnum
    )
    comment = models.TextField(null=True, blank=True)
    read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)