from django.urls import path
from recycle_db import views

urlpatterns = [
    path('recycle_db/', views.recyclable_list),
    path('recycle_db/<int:pk>/', views.recyclable_detail),
    ]
