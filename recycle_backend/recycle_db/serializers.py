from rest_framework import serializers
from recycle_db.models import Recyclable, UserProfile
from django.contrib.auth.models import User

class RecyclableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recyclable
        fields = ('item', 'methods')

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email')

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer(required=True)
    class Meta:
        model = UserProfile 
        fields = ('user', 'trusted', 'birth_date') 
    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        student, created = UserProfile.objects.update_or_create(user=user,
                        #trusted = validated_data.pop('trusted'), 
                        #birth_date = validated_data.pop('birth_date'),
                        #first_name = validated_data.pop('first_name'),
                    **validated_data
                        )
        return student
