from django.db import models


class Recyclable(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    item = models.CharField(max_length=100, blank=True, default='')
    methods = models.TextField()
    locations = models.TextField()

    class Meta:
        ordering = ('created',)
# Create your models here.
