from django.urls import path
from .views import index

urlpatterns = [
    path('',index),
<<<<<<< HEAD
    path('homepage',index),
=======
    path('login/',index),
>>>>>>> d68916b891fa515aa6dc3c6e18b41615e4ecd553
]