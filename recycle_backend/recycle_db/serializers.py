from rest_framework import serializers
from recycle_db.models import Recyclable

class RecyclableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recyclable
        fields = ('item', 'methods')
