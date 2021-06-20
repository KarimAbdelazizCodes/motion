from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class MainUserSerializer(serializers.ModelSerializer):

    number_of_followers = serializers.SerializerMethodField()

    def get_number_of_followers(self, obj):
        return obj.followers.count()

    class Meta:
        model = User
        fields = '__all__'


class FriendsSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'friends'
        ]


class UserProfileMainSerializer(serializers.ModelSerializer):
    user = User

    class Meta:
        model = User
        fields = [
            "user",
            "id",
            "email",
            "first_name",
            "last_name",
            "about",
            "created",
            "updated",
            "following",
            "friends"
        ]


class UpdateUserProfileMainSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = '__all__'
