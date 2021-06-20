from rest_framework.permissions import BasePermission


class IsRequester(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.id == obj.requester.id:
            return True
        else:
            return False


class IsReceiver(BasePermission):
    def has_object_permission(self, request, view, obj):
        if request.user.id == obj.receiver.id:
            return True
        else:
            return False
