import os
from django.contrib.auth.models import AbstractUser
from django.db import models


def get_file_path(instance, fileName):
    ext = fileName.split('.')[-1]
    fileName = "%s.%s" % (instance.id, ext)

    return os.path.join('avatar/', fileName)

class User(AbstractUser):
    email = models.EmailField(unique=True)
    avatar = models.ImageField(upload_to=get_file_path, blank=True) # blank=True = no es obligatorio tener
    description = models.CharField(max_length=100, blank=True)
    website = models.CharField(max_length=100, blank=True)
    instagram = models.CharField(max_length=100, blank=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []