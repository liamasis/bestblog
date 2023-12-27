from django.urls import path
from . import views
from .views import MyTokenObtainPairView
from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('blog', views.home, name='home'),
    path('blog/<str:pk>', views.blogpost, name='blog-post'),
    path('category/', views.category, name='category'),
    path('users/', views.users, name='users'),
    path('user-registration/', views.user_registration, name='user-registration'),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]