# from rest_framework import serializers
# from django.contrib.auth import get_user_model
# from user.serializers.mainserializer import UserProfileSerializer
# from userprofile.models import UserProfile
#
# User = get_user_model()
#
# class MainUserSerializer(serializers.ModelSerializer):
#
#     number_of_followers = serializers.SerializerMethodField()
#
#     def get_number_of_followers(self, obj):
#         return obj.followers.count()
#
#     class Meta:
#         model = UserProfile
#         fields = '__all__'
#
#
# class FriendsSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = UserProfile
#         fields = [
#             'friends'
#         ]
#
#
# class UserProfileMainSerializer(serializers.ModelSerializer):
#     user = User
#     email = serializers.SerializerMethodField()
#     username = serializers.SerializerMethodField()
#     first_name = serializers.SerializerMethodField()
#     last_name = serializers.SerializerMethodField()
#
#     def get_email(self, obj):
#         return obj.user.email
#
#     def get_username(self, obj):
#         return obj.user.username
#
#     def get_first_name(self, obj):
#         return obj.user.first_name
#
#     def get_last_name(self, obj):
#         return obj.user.last_name
#
#     class Meta:
#         model = UserProfile
#         fields = [
#             "user",
#             "id",
#             "email",
#             "first_name",
#             "last_name",
#             "about",
#             "created",
#             "updated",
#             "following",
#             "friends"
#         ]
#
#
# class UpdateUserProfileMainSerializer(serializers.ModelSerializer):
#     user = UserProfileSerializer(required=True)
#
#     class Meta:
#         model = UserProfile
#         fields = '__all__'
#
#     def update(self, instance, validated_data):
#         instance.last_name = validated_data.get('last_name', instance.last_name)
#         # instance.f_name = validated_data.get('f_name', instance.f_name)
#         # instance.skills = validated_data.get('skills')
#         instance.save()
#         return instance
