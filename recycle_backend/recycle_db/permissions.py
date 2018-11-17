from rest_framework import permissions
from recycle_db.models import User, UserProfile
from django.contrib.auth.models import AnonymousUser

class IsTrustedOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True
        if not isinstance(request.user, AnonymousUser):
            user_profile = UserProfile.objects.get(user=request.user)
            return user_profile.trusted
        return False
