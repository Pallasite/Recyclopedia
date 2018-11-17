# -*- coding: cp1252 -*-
import pdb
import json
from django.test import TestCase
from rest_framework.test import APIRequestFactory
from rest_framework import status
from ..models import Recyclable
from ..models import UserProfile
from ..serializers import RecyclableSerializer
from ..serializers import UserProfileSerializer
from .. import views

# Simple Python Unit Tests
# for Django
#
class RecyclableTest(TestCase):
    """ Test for basic get search item """
    def setUp(self):
        Recyclable.objects.create(item='deer', methods='double bag it')
        Recyclable.objects.create(item='coffee cup', 
                        methods='spill it on Wendt table')
        Recyclable.objects.create(item='curtain', methods='idk')
    
    def test_creation(self):
        deer = Recyclable.objects.get(item='deer')
        coffee_cup = Recyclable.objects.get(item='coffee cup')

        self.assertEqual(coffee_cup.methods, 'spill it on Wendt table')
        self.assertEqual(deer.methods, 'double bag it')
        
        with self.assertRaises(Exception):
            Recyclable.objects.create(item='bad', location='madison')

    def test_empty_request(self):
        reqfactory = APIRequestFactory()
        req = reqfactory.get('/recycle_db/search/')
        resp = views.recyclable_search(req, '')
        resp.render()
        self.assertNotEquals(resp.content, "[{}]")
        self.assertEquals(resp.status_code, 200)

    def test_special_chars(self):
        reqfactory = APIRequestFactory()
        req = reqfactory.get('')
        resp = views.recyclable_search(req, '??&&&||\\;!@#!#)_!%@(*')
        self.assertEquals(resp.status_code, status.HTTP_204_NO_CONTENT)

    def test_user_profile_serializer_blank_user(self):
        upt = UserProfile()
        serialize = UserProfileSerializer(upt)
        self.assertNotEquals(serialize.data, None);

    def test_not_found_search(self):
        reqfactory = APIRequestFactory()
        req = reqfactory.get('/recycle_db/search/gutters')
        resp = views.recyclable_search(req, 'gutters')
        self.assertEquals(resp.status_code, status.HTTP_204_NO_CONTENT)

    def test_serializer(self):
        deer = Recyclable.objects.get(item='deer')
        serializer = RecyclableSerializer(deer)
        self.assertEqual(serializer.data, 
                        {'item': 'deer', 'methods': 'double bag it'})
        serializer = RecyclableSerializer(data={'item': 'broken', 
                'location': 'hell'})
        self.assertFalse(serializer.is_valid())
    
    def test_search(self):
        factory = APIRequestFactory()
        request = factory.get('/recycle_db/search/cu')
        data = views.recyclable_search(request, 'cu')
        serializers = []
        for el in data.data:
            formatted_data = json.loads(json.dumps(el))
            serializers.append(RecyclableSerializer(data=formatted_data))
            self.assertIn(formatted_data['methods'], ['idk', 'spill it on Wendt table'])
         
        for el in serializers:
            # should be false items with that key already exist
            self.assertFalse(el.is_valid())







