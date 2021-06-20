from django.urls import path
from user.views import ToggleUserFollow, ListUserFollowers, ListFollowingUser, ListUserView, \
    ListUserFriends, UpdateLoggedInUserProfile
# ListLoggedInUserProfile

urlpatterns = [
    path('social/followers/toggle-follow/<int:pk>/', ToggleUserFollow.as_view()),
    path('social/followers/followers/', ListUserFollowers.as_view()),
    path('social/followers/following/', ListFollowingUser.as_view()),
    path('social/friends/', ListUserFriends.as_view()),
    path('users/', ListUserView.as_view()),
    # path('users/me/', ListLoggedInUserProfile.as_view()),
    path('users/me/', UpdateLoggedInUserProfile.as_view())
]
