from rest_framework.response import Response
from rest_framework.generics import CreateAPIView, DestroyAPIView, ListAPIView, RetrieveUpdateDestroyAPIView
from rest_framework import status
from friendrequest.serializers.friendrequests import FriendRequestSerializer, AcceptRejectSerializer
from friendrequest.models import FriendRequest
from friendrequest.permissions import FriendRequestPermissions
from django.contrib.auth import get_user_model
from django.db.models import Q

User = get_user_model()


class NewFriendRequest(CreateAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = FriendRequestSerializer

    def perform_create(self, serializer):
        requester = self.request.user
        receiver = User.objects.get(id=self.kwargs['pk'])
        # Prevents user from adding himself or adding someone they're already friends with
        if self.request.user.id == self.kwargs['pk'] or receiver in self.request.user.friends.all():
            return Response(status=status.HTTP_400_BAD_REQUEST)
        else:
            serializer.save(requester=requester, receiver=receiver)
            return Response(serializer.data, status=status.HTTP_201_CREATED)


class GetAcceptRejectFriendrequest(RetrieveUpdateDestroyAPIView):
    queryset = FriendRequest.objects.all()
    serializer_class = AcceptRejectSerializer
    permission_classes = [FriendRequestPermissions]


# list requests that are pending approval or rejection
class ListPendingFriendRequests(ListAPIView):
    serializer_class = FriendRequestSerializer

    def get_queryset(self):
        user = self.request.user.id
        return FriendRequest.objects.filter(Q(receiver=user) | Q(requester=user), status="P")
