from django.urls import path
from friendrequest.views import NewFriendRequest, CancelFriendRequest, GetAcceptRejectFriendrequest, \
    ListPendingFriendRequests


urlpatterns = [
    path('social/friends/request/<int:pk>/', NewFriendRequest.as_view()),
    path('social/friends/request/cancel/<int:pk>/', CancelFriendRequest.as_view()),
    path('social/friends/requests/<int:pk>/', GetAcceptRejectFriendrequest.as_view()),
    path('social/friends/requests/', ListPendingFriendRequests.as_view()),
]
