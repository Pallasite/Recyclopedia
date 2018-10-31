from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from recycle_db.models import Recyclable
from recycle_db.serializers import RecyclableSerializer

@api_view(['GET', 'POST'])
def recyclable_list(request):
    if request.method == 'GET':
        recyclable = Recyclable.objects.all()
        serializer = RecyclableSerializer(recyclable, many=True)
        return Response(serializer.data)

    elif request.method == 'POST': 
        serializer = RecyclableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_Created)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def recyclable_detail(request, pk):
    try: 
        recyclable = Recyclable.objects.get(pk=pk)
    except Recyclable.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'GET':
        serializer = RecyclableSerializer(recyclable)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = RecyclableSerializer(recyclable, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        recyclable.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
        






