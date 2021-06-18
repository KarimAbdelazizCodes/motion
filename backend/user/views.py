# from rest_framework import status
# from rest_framework.generics import UpdateAPIView, ListAPIView
# from django.contrib.auth import get_user_model
# from rest_framework.response import Response
# from .serializers.followers import ToggleFollowSerializer, ListFollowersSerializer, ListFollowingSerializer
# from .serializers.mainserializer import MainUserSerializer
#
# User = get_user_model()
#
#
# class ToggleUserFollow(UpdateAPIView):
#     queryset = User.objects.all()
#     serializer_class = ToggleFollowSerializer
#
#     def patch(self, request, *args, **kwargs):
#         # This defines the instance that the authenticated user wants to follow
#         user = self.get_object()
#         if self.request.user.id == user.id:
#             return Response({'error': 'You cannot follow yourself'}, status=status.HTTP_400_BAD_REQUEST)
#         if self.request.user in user.followers.all():
#             user.followers.remove(self.request.user)
#             return Response({'Success': f'User {user.id} unfollowed'}, status=status.HTTP_200_OK)
#         else:
#             user.followers.add(self.request.user)
#             return Response({'Success': f'User {user.id} followed'}, status=status.HTTP_200_OK)
#
#
# class ListUserFollowers(ListAPIView):
#     serializer_class = ListFollowersSerializer
#
#     def list(self, request, *args, **kwargs):
#         queryset = User.objects.get(id=self.request.user.id)
#         serializer = self.get_serializer(queryset)
#         return Response(serializer.data)
#
#
# class ListFollowingUser(ListAPIView):
#     serializer_class = ListFollowingSerializer
#
#     def list(self, request, *args, **kwargs):
#         queryset = User.objects.get(id=self.request.user.id)
#         serializer = self.get_serializer(queryset)
#         return Response(serializer.data)
#
#
# class ListUserView(ListAPIView):
#     queryset = User.objects.all()
#     serializer_class = MainUserSerializer
#
