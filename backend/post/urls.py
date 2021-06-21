from django.urls import path
from .views import RetrieveUserPostView, ListFollowingUsersPostView, ListCreatePostsView, \
    RetrieveUpdateDestroyPostsView, \
    ListUserLikedPostsView, ToggleLikes, ListFriendsPostsView, SearchPostsView

urlpatterns = [
    path('social/posts/', ListCreatePostsView.as_view()),
    path('social/posts/<int:pk>/', RetrieveUpdateDestroyPostsView.as_view()),
    path('social/posts/toggle-like/<int:pk>/', ToggleLikes.as_view()),
    path('social/posts/likes/', ListUserLikedPostsView.as_view()),
    path('social/posts/user/<int:pk>/', RetrieveUserPostView.as_view()),
    path('social/posts/friends/', ListFriendsPostsView.as_view()),
    path('social/posts/following/', ListFollowingUsersPostView.as_view()),
    path('social/posts/<str:search_string>/', SearchPostsView.as_view()),
]
