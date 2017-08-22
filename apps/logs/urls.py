from django.conf.urls import url

from .import views


urlpatterns = [
    url(r'^(?P<demo_permalink>[A-Za-z]+)/add/$', views.post_log, name='post_log'),
    url(r'^(?P<log_id>[0-9]+)/output/$', views.post_output, name='post_output'),
]
