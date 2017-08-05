from django.conf.urls import url

from .import views


urlpatterns = [
    url(r'^demos/$', views.get_demos, name='get_demos'),
    url(r'^projects/$', views.get_projects, name='get_projects'),
]
