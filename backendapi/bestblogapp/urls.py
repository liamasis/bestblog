from django.urls import path
from . import views

urlpatterns = [
    path('blog', views.home, name='home'),
    path('blog/<str:pk>', views.blogpost, name='blog-post'),
    path('category/', views.category, name='category'),
    path('users/', views.users, name='users'),
    path('user-registration/', views.user_registration, name='user-registration'),

]