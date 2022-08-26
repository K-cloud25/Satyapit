from os import stat
from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, FnewsSerializer, UpdateFnewsSerializer, PrelSerializer
from .models import Fnews, User, Prel
from datetime import date, timedelta
# Create your views here.


def index(request):
    return HttpResponse('<h1>API CHECKs</h1>')


class UserVerif(APIView):

    serializer_class = UserSerializer
    look_up_kwargs = 'id'

    def get(self, request, format=None):
        userID = request.GET.get(self.look_up_kwargs)
        if(userID != None):
            users = User.objects.filter(id=userID)
            if(len(users) > 0):
                user = UserSerializer(users[0]).data
                return Response(user, status=status.HTTP_200_OK)
            return Response({'Valid Param Missing': 'User Entry not found'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'ID param not found'}, status=status.HTTP_400_BAD_REQUEST)


class getFnews(APIView):
    serializer_class = FnewsSerializer

    def get(self, request, format=None):
        newsArr = []

        tdate = date.today()
        tday = date.today()
\
        news = Fnews.objects.filter(date=tdate)
        if(len(news) < 15):
            tday = tday - timedelta(days=1)
            news = news | Fnews.objects.filter(date=tday)

            if(len(news) < 20):
                tday = tday - timedelta(days=1)
                news = news | Fnews.objects.filter(date=tday)

        for fnews in news:
            newsArr.append(FnewsSerializer(fnews).data)

        if(len(newsArr) == 0):
            return Response({'No Content': 'No Content Passed'}, status=status.HTTP_204_NO_CONTENT)
        return Response(newsArr, status=status.HTTP_200_OK)


class getPrel(APIView):
    serializer_class = PrelSerializer
    look_up_kwargs = 'id'

    def get(self, request, format=None):

        prlID = request.GET.get(self.look_up_kwargs)
        if(prlID != None):
            prel = Prel.objects.filter(pr_id=prlID)
            if len(prel) > 0:
                retPrel = PrelSerializer(prel[0]).data
                return Response(retPrel, status=status.HTTP_200_OK)
            return Response({'Bad Request': 'No such PRL'}, status=status.HTTP_404_NOT_FOUND)
        return Response({'Bad Request': 'PR_ID param missing'}, status=status.HTTP_400_BAD_REQUEST)


class UpdateFnew(APIView):

    serializer_class = UpdateFnewsSerializer

    def patch(self, request, format=None):

        serliazed = self.serializer_class(data=request.data)

        if(serliazed.is_valid()):
            id = serliazed.data.get('id')
            flags = serliazed.data.get('flags')

            queryset = Fnews.objects.filter(id=id)
            fnews = queryset[0]
            fnews.flags = fnews.flags + flags
            fnews.save(update_fields=['flags'])
            return Response(FnewsSerializer(fnews).data, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'Invalid Params'}, status=status.HTTP_400_BAD_REQUEST)


class DeleteFnews(APIView):

    def delete(self, request, id=None):
        fnews = Fnews.objects.get(id=int(id))
        fnews.delete()
        return Response({'Deleted': 'Given Data is deleted'}, status=status.HTTP_200_OK)
