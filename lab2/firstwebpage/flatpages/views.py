from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, 'templates/static_handler.html')


def hello(request):
    return HttpResponse('Привет, Мир!')


def index(request):
    return render(request, 'templates/index.html')
