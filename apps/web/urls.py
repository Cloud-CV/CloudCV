from django.conf.urls import url

from .import views


urlpatterns = [
    url(r'^contact/$', views.contact_us, name='contact_us'),
    url(r'^team/$', views.get_team_members, name='get_team_members'),
]
