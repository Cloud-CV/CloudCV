import os
from ..common import *  # noqa: ignore=F405

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': os.environ.get('DEV_DB_HOST', 'db'),
        'PORT': '5432',
    }
}
