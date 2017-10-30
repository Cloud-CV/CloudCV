from .common import *  # noqa: ignore=F405

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': "cloudcv",
        'USER': "",
        'PASSWORD': "",
        'HOST': "localhost",
        'PORT': "5432",
    }
}
