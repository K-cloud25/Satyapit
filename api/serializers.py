from dataclasses import field
from pyexpat import model
from rest_framework import serializers
from .models import Fnews,Prel,User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id','username','passwrd']

class FnewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Fnews
        fields=['id','title','pr_id','pr_per_cent','url','date','src','flags']

class PrelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prel
        fields = ['pr_id','title','url']

class UpdateFnewsSerializer(serializers.ModelSerializer):

    id = serializers.IntegerField(validators=([]))

    class Meta:
        model = Fnews
        fields = ['id','flags']