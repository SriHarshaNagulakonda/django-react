
from .views import index
from django.urls import path

urlpatterns = [
    path('',index),
    path('join',index),
    path('create',index),
    path('join/2',index),
    path('room/<str:roomCode>', index)]
