from django.db import models


class Recyclable(models.Model):
    item = models.CharField(max_length=100, blank=True, default='', primary_key = True)
    methods = models.TextField()


# Create your models here.
