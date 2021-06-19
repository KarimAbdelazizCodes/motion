from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    about = models.TextField(max_length=500, blank=True)
    following = models.ManyToManyField('self', blank=True, related_name='followers', symmetrical=False)
    friends = models.ManyToManyField('self', related_name='friends', blank=True)

    def __str__(self):
        return self.username
