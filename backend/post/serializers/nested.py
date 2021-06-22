from rest_framework import serializers
from friendrequest.models import FriendRequest
from post.models import Post
from user.models import User


class UserNestedSerializer(serializers.ModelSerializer):
    logged_in_user_is_following = serializers.SerializerMethodField()
    logged_in_user_is_friends = serializers.SerializerMethodField()
    logged_in_user_is_rejected = serializers.SerializerMethodField()
    amount_of_posts = serializers.SerializerMethodField()
    amount_of_likes = serializers.SerializerMethodField()
    logged_in_user_received_fr = serializers.SerializerMethodField()

    def get_logged_in_user_is_following(self, obj):
        return self.context['request'].user.id in obj.following.core_filters

    def get_logged_in_user_is_friends(self, obj):
        return self.context['request'].user.id in obj.friends.core_filters

    def get_logged_in_user_is_rejected(self, obj):
        user = self.context['request'].user.id
        rejected = FriendRequest.objects.filter(requester_id=user, status='R')
        return len(rejected) > 0

    def get_logged_in_user_received_fr(self, obj):
        logged_in_user = self.context['request'].user.id
        friend_request = FriendRequest.objects.filter(receiver_id=logged_in_user,
                                                      requester_id=obj.author.id)
        return len(friend_request) > 0

    def get_amount_of_posts(self, obj):
        return obj.user_posts.count()

    def get_amount_of_likes(self, obj):
        return obj.liked_posts.count()

    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'first_name', 'last_name',
                  'location', 'about', 'hobbies', 'logged_in_user_is_following',
                  'logged_in_user_is_friends', 'logged_in_user_is_rejected',
                  'logged_in_user_received_fr', 'amount_of_posts', 'amount_of_likes']


class ToggleLikesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Post
        fields = ['id', 'liked_by']
        read_only = ['id']

