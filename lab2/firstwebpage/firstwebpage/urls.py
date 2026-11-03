from django.contrib import admin
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.urls import path
from flatpages import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home'),
    path('hello/', views.hello, name='hello'),
    path('index/', views.index, name='index'),
]

urlpatterns += staticfiles_urlpatterns()
