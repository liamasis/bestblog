from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('category/', views.category, name='category'),
    path('users/', views.users, name='users'),
    path('user-registration/', views.user_registration, name='user-registration'),

]