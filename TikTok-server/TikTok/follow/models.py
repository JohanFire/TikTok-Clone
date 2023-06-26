from django.db import models

class Follow(models.Model):
    # if 2 foreign key of in the same model/table, we have to give them relative names
    user = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name="user")
    user_followed = models.ForeignKey('users.User', on_delete=models.CASCADE, related_name="user_followed")
    created_at = models.DateTimeField(auto_now_add=True)