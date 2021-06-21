from rest_framework import serializers

from post.models import Post
from user.models import User


class UserNestedSerializer(serializers.ModelSerializer):
    # logged_in_user_is_following = serializers.SerializerMethodField()
    # logged_in_user_is_friends = serializers.SerializerMethodField()
    # logged_in_user_is_rejected = serializers.SerializerMethodField()


    class Meta:
        model = User
        fields = ['id', 'email', 'first_name', 'last_name', 'username', 'about']


class ToggleLikesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['id', 'liked_by']
        read_only = ['id']

