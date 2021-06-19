from rest_framework import serializers
from django.contrib.auth import get_user_model
from registration.models import Registration

User = get_user_model()


class ValidationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'username',
            'password',
            'first_name',
            'last_name',
        ]

        read_only_fields = ['email']


class PasswordValidation(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'email',
            'password'
        ]
        read_only_fields = ['email']
