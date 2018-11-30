from django.urls import path
from recycle_db import views

urlpatterns = [
    path('recycle_db/', views.RecyclableList.as_view()),
    path('recycle_db/<str:item>/', views.RecyclableDetail.as_view()),
    path('recycle_db/search/<str:search>/', views.recyclable_search),
    path('recycle_db/user_login/', views.UserDetail.as_view()),
    path('recycle_db/recyclable/', views.UserProfileDetail.as_view()),
    ]
