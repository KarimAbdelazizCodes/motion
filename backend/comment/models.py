from django.db import models
from django.contrib.auth import get_user_model
from post.models import Post

User = get_user_model()


class Comment(models.Model):
    author = models.ForeignKey(to=User, related_name='comments', on_delete=models.CASCADE)
    text = models.TextField(blank=True)
    created = models.DateTimeField(auto_now_add=True)
    edited = models.DateTimeField(auto_now=True)
    post = models.ForeignKey(to=Post, on_delete=models.CASCADE, blank=False)

    def __str__(self):
        return f'Comment #{self.id}, authored by {self.author} on {self.post}'
