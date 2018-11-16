from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
class Recyclable(models.Model):
    item = models.CharField(max_length=100, blank=True, default='', primary_key = True)
    methods = models.TextField()


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    trusted = models.BooleanField(default=False)
    birth_date = models.DateField(null=True, blank=True)
    first_name = models.CharField(max_length=15, blank=True, default='')
    last_name = models.CharField(max_length=30, blank=True, default='')

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
    if created:
        UserProfile.objects.create(user=instance)






