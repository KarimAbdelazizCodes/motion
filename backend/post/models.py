from django.db import models
from django.contrib.auth import get_user_model
from comment.models import Comment

User = get_user_model()


def post_directory_path(instance, filename):
    return f'{instance.id}/{filename}'


class Post(models.Model):
    content = models.TextField(blank=True)
    # This can be edited after we're done with basic functionality
    images = models.ImageField(upload_to=post_directory_path, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    author = models.ForeignKey(to=User, related_name="user_posts", on_delete=models.CASCADE)
    liked_by = models.ManyToManyField(to=User, blank=True, related_name="liked_posts")
    comment = models.ForeignKey(to=Comment, related_name='commented_on', on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f"Post: {self.id}, Author: {self.author}"
