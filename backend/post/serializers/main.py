from rest_framework import serializers

from post.models import Post
from post.serializers.nested import UserNestedSerializer


#  Used in any action requiring rewriting post content
class PostsWriteSerializer(serializers.ModelSerializer):
    author = UserNestedSerializer(read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'content', 'images', 'created', 'liked_by', 'author']
        read_only = ['id', 'created', 'updated', 'liked_by', 'author']


#  Used in any action requiring the reading of post content
class PostsReadSerializer(serializers.ModelSerializer):
    author = UserNestedSerializer()
    amount_of_likes = serializers.SerializerMethodField()
    is_from_logged_in_user = serializers.SerializerMethodField()
    logged_in_user_liked = serializers.SerializerMethodField()

    def get_amount_of_likes(self, obj):
        obj.liked_by.count()

    def get_is_from_logged_in_user(self, obj):
        if self.context["request"].user == obj.author:
            return True
        else:
            return False

    def get_logged_in_user_liked(self, obj):
        if self.context["request"].user.id in obj.liked_by.core_filters:
            return True
        else:
            return False

    class Meta:
        model = Post
        fields = '__all__'
        read_only = ['id', 'created', 'updated', 'author', 'liked_by']


# class GetMultiplePostsSerializer(serializers.Serializer):
#     results = PostsReadSerializer(many=True)
#     count = serializers.SerializerMethodField()
#
#     def get_count(self, obj):
#         return Post.objects.all().count()

