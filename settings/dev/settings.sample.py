from settings.common import *  # noqa: ignore=F405

DEBUG = True

ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': "postgres",
        'USER': "postgres",
        'PASSWORD': "postgres",
        'HOST': "db",
        'PORT': "5432",
    }
}
