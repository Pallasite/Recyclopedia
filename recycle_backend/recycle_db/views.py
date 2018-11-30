from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from recycle_db.models import Recyclable, UserProfile
from recycle_db.serializers import RecyclableSerializer, UserSerializer, UserProfileSerializer
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly, AllowAny
from recycle_db.permissions import IsTrustedOrReadOnly

class UserDetail(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer = UserSerializer
    def get(request, username):
        user = UserProfile.objects.all(
                        username=username).select_related('profile')
        assert len(user) <= 1 #TODO idk take out once working
        if user:
            serializer = UserSerializer
            return response(serializer.data)
        return Response(status=status.HTTP_204_NO_CONTENT)


class UserProfileDetail(generics.RetrieveAPIView):
    queryset = UserProfile.objects.all()
    serializer = UserProfileSerializer
    permission_classes = (AllowAny,) 

"""   
    def post(request):
        serializer = UserProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=ValueError):
            serializer.create(validated_data=request.data)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.error_messages, 
                        status=status.HTTP_400_BAD_REQUEST)
    """
"""
@api_view(['GET'])
@permission_classes((AllowAny,))
def search_location(request, item):
"""


class RecyclableList(generics.ListCreateAPIView):
    queryset = Recyclable.objects.all()
    serializer_class = RecyclableSerializer
    permission_classes = (IsTrustedOrReadOnly, IsAuthenticatedOrReadOnly)
    """ 
    if request.method == 'GET':
        recyclable = Recyclable.objects.all()
        serializer = RecyclableSerializer(recyclable, many=True)
        return Response(serializer.data)
    
        serializer = RecyclableSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    """

@api_view(['GET'])
@permission_classes((AllowAny,))
def recyclable_search(request, search):
    recyclable_search = Recyclable.objects.filter(
                    item__icontains=search)[:50]
    
    #spilt qry to see if any words start with search
    filtered_search = []
    for qry in recyclable_search:
        split_arr = qry.item.split()
        for el in split_arr:
            if el.lower().startswith(search.lower()):
                filtered_search.append(qry)
                break
    if len(filtered_search) == 0:
        return Response(status=status.HTTP_204_NO_CONTENT) 
    
    serializer = RecyclableSerializer(filtered_search, many=True)
    return Response(serializer.data)


class RecyclableDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Recyclable.objects.all()
    serializer_class = RecyclableSerializer
    
