from django.shortcuts import render
from django.template.loader import render_to_string
from django.views.generic import TemplateView

# Create your views here.
import os
import requests
#re helps with string splitting

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
#########################################################################################
def home(request):
    return render(request, 'app_base.html')

def search(request):
    if request.method == 'POST':
        curStock = request.POST.get("stock")
        try:

            return render(request, 'select_item.html', {'content':
            ['Search results for' + curStock.lower() +
            '__________________________________________________________________________',
            'Can you recycle?: ' + 'Yes'
            ]})
        except:
            return render(request, 'select_item.html', {'content': ['Invalid Input (Please enter valid ticker)']})
    return render(request, 'select_item.html')

def contact(request):
    return render(request, 'contact.html')
