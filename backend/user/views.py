from rest_framework import status, filters
from rest_framework.generics import UpdateAPIView, ListAPIView, RetrieveUpdateAPIView
from django.contrib.auth import get_user_model
from rest_framework.response import Response
from user.serializers.followers import ListFollowersSerializer, ListFollowingSerializer
from user.serializers.mainserializer import MainUserSerializer, FriendsSerializer, RetrieveUpdateUserProfileSerializer

User = get_user_model()


class ToggleUserFollow(UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = MainUserSerializer

    def patch(self, request, *args, **kwargs):
        # This defines the instance that the authenticated user wants to follow
        user = self.get_object()
        # The authenticated user who is making the follow request
        follower = self.request.user

        if self.request.user.id == user.id:
            return Response({'error': 'You cannot follow yourself'}, status=status.HTTP_400_BAD_REQUEST)
        if follower in user.followers.all():
            user.followers.remove(follower)
            return Response({'Success': f'User {user.id} unfollowed'}, status=status.HTTP_200_OK)
        else:
            user.followers.add(follower)
            return Response({'Success': f'User {user.id} followed'}, status=status.HTTP_200_OK)


class ListUserFriends(ListAPIView):
    serializer_class = FriendsSerializer

    def list(self, request, *args, **kwargs):
        instance = User.objects.get(id=self.request.user.id)
        return Response(self.get_serializer(instance).data)


class ListUserFollowers(ListAPIView):
    serializer_class = ListFollowersSerializer

    def list(self, request, *args, **kwargs):
        queryset = User.objects.get(id=self.request.user.id)
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)


class ListFollowingUser(ListAPIView):
    serializer_class = ListFollowingSerializer

    def list(self, request, *args, **kwargs):
        queryset = User.objects.get(id=self.request.user.id)
        serializer = self.get_serializer(queryset)
        return Response(serializer.data)


class ListUserView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = MainUserSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['username', 'first_name', 'last_name']


class UpdateLoggedInUserProfile(RetrieveUpdateAPIView):
    serializer_class = RetrieveUpdateUserProfileSerializer

    def get_object(self):
        return User.objects.get(id=self.request.user.id)
