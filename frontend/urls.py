from django.urls import path
from .views import index

urlpatterns = [
    path('',index),
    path('homepage',index),
    path('login/',index),
    path('mainpage',index),
    path('mainpage/page',index),
    path('mainpage/buffer',index),
    path('mainpage/mainpage',index),
]