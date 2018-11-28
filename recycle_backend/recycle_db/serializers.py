from rest_framework import serializers
from recycle_db.models import Recyclable, UserProfile, Location
from django.contrib.auth.models import User

class RecyclableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recyclable
        fields = ('item', 'methods', 'locations')
        depth = 1

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ('latitude', 'longitude', 'name')

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    class Meta:
        model = UserProfile 
        fields = ('user', 'trusted', 'birth_date') 
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        student, created = UserProfile.objects.update_or_create(user=user,
                    **validated_data)
        return student
