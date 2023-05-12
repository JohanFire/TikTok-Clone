from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin

from users.models import User

# Register your models here.
@admin.register(User)
class UserAdmin(BaseUserAdmin):
    pass