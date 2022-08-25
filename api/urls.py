from django.urls import path
from .views import index,UserVerif,getFnews,getPrel,UpdateFnew,DeleteFnews

urlpatterns = [
    path('',index),
    path('getUser/',UserVerif.as_view()),
    path('getAllNews/',getFnews.as_view()),
    path('getPrel/',getPrel.as_view()),
    path('updateFnews/',UpdateFnew.as_view()),
    path('deleteFnews/<str:id>',DeleteFnews.as_view()),
]