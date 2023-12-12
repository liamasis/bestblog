from django.shortcuts import render
from django.http import HttpResponse

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import *
from .models import *
from django.contrib.auth.models import User


@api_view(['GET'])
def home(request):
    posts = Post.objects.all()
    serialize = PostSerializer(posts, many=True)
    return Response(serialize.data)

@api_view(['GET'])
def blogpost(request, pk):
    posts = Post.objects.get(pk=pk)
    serialize = PostSerializer(posts)
    return Response(serialize.data)

@api_view(['GET'])
def category(request):
    cat = Category.objects.all()
    seralize = CategorySerializer(cat, many=True)
    return Response(seralize.data)

@api_view(['GET'])
def users(request):
    user = User.objects.all()
    serialise = UserSerializer(user, many=True)
    return Response(serialise.data)

@api_view(['POST'])
def user_registration(request):
    serializer = UserRegSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.data, status=status.HTTP_400_BAD_REQUEST)

