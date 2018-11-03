from django.urls import path
from recycle_db import views

urlpatterns = [
    path('recycle_db/', views.recyclable_list),
    path('recycle_db/<str:item>/', views.recyclable_detail),
    path('recycle_db/search/<str:search>/', views.recyclable_search)
    ]
