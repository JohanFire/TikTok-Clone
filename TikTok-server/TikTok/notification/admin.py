from django.contrib import admin
from notification.models import Notification

@admin.register(Notification)
class NotificationAdmin(admin.ModelAdmin):
    list_display = ['user', 'user_follower', 'video',
                    'type_notification', 'comment', 'read',
                    'created_at'
                    ]
