from django.db import models

# Create your models here.
class User (models.Model):              
    id = models.IntegerField(null=False,primary_key=True)
    username = models.CharField(max_length=20)
    passwrd = models.CharField(max_length=20)


class Fnews(models.Model):
    id = models.AutoField(null=False,primary_key=True)
    title = models.CharField(max_length=800,default="No Title Available")
    pr_id = models.IntegerField(null=False,default=-1)
    pr_per_cent = models.FloatField()
    url = models.TextField()
    date  = models.DateField()
    src = models.CharField(max_length=40,null=False,default="Internet")
    flags = models.IntegerField(null=False,default=0)
    sus_fac = models.IntegerField(null=False)

class Prel(models.Model):
    pr_id = models.IntegerField(null=False,primary_key=True)
    title = models.CharField(max_length=800)
    url = models.TextField()