from ..common import *  # noqa: ignore=F405

import os
import raven

DEBUG = False

# Database
# https://docs.djangoproject.com/en/1.10.2/ref/settings/#databases

ALLOWED_HOSTS += ['cloudcv.us-west-2.elasticbeanstalk.com'] # noqa

ADMINS = [('Admin', 'admin@cloudcv.org')]

CORS_ORIGIN_ALLOW_ALL = False

CORS_ORIGIN_WHITELIST = (
    'cloudcv.org',
    'cloudcvbucket.s3.amazonaws.com',
    'cloudcv.us-west-2.elasticbeanstalk.com'
)

DATADOG_APP_NAME = 'CloudCV'
DATADOG_APP_KEY = os.environ.get('DATADOG_APP_KEY', '')
DATADOG_API_KEY = os.environ.get('DATADOG_API_KEY', '')

MIDDLEWARE += ('middleware.metrics.DatadogMiddleware', )     # noqa

INSTALLED_APPS = ['otto_admin', 'pipeline',] + INSTALLED_APPS # noqa
INSTALLED_APPS += ('raven.contrib.django.raven_compat',) # noqa

PIPELINE = {
    'PIPELINE_ENABLED': False,
}

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': os.environ.get('RDS_DB_NAME', ''),
        'USER': os.environ.get('RDS_USERNAME', ''),
        'PASSWORD': os.environ.get('RDS_PASSWORD', ''),
        'HOST': os.environ.get('RDS_HOSTNAME', ''),
        'PORT': os.environ.get('RDS_PORT', ''),
    }
}

AWS_STORAGE_BUCKET_NAME = 'cloudcvbucket'
AWS_ACCESS_KEY_ID = os.environ.get('AWS_ACCESS_KEY_ID', '')
AWS_SECRET_ACCESS_KEY = os.environ.get('AWS_SECRET_ACCESS_KEY', '')

# Amazon S3 Configurations
AWS_S3_CUSTOM_DOMAIN = '%s.s3.amazonaws.com' % AWS_STORAGE_BUCKET_NAME

# static files configuration on S3
STATICFILES_LOCATION = 'static'
STATICFILES_STORAGE = 'settings.prod.custom_storages.StaticStorage'
STATIC_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, STATICFILES_LOCATION)

# Media files configuration on S3
MEDIAFILES_LOCATION = 'media'
MEDIA_URL = 'https://%s/%s/' % (AWS_S3_CUSTOM_DOMAIN, MEDIAFILES_LOCATION)
DEFAULT_FILE_STORAGE = 'settings.prod.custom_storages.MediaStorage'

# Setup Email Backend related settings
DEFAULT_FROM_EMAIL = 'noreply@cloudcv.org'
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = os.environ.get('EMAIL_HOST', '')
EMAIL_HOST_PASSWORD = os.environ.get('EMAIL_HOST_PASSWORD', '')
EMAIL_HOST_USER = os.environ.get('EMAIL_HOST_USER', '')
EMAIL_PORT = os.environ.get('EMAIL_PORT', '')
EMAIL_USE_TLS = os.environ.get('EMAIL_USE_TLS', '')

OA_ANALYTICS_CREDENTIALS_JSON = os.path.join(BASE_DIR, 'CloudCV.json')  # noqa
OA_ANALYTICS_VIEW_ID = 158735598
OA_COPYRIGHT = '2017 CloudCV'

# Port number for the python-memcached cache backend.
CACHES['default']['LOCATION'] = os.environ.get('MEMCACHED_LOCATION', '127.0.0.1:11211') # noqa: ignore=F405

RAVEN_CONFIG = {
    'dsn': os.environ.get('SENTRY_URL'),
    # If you are using git, you can also automatically configure the
    # release based on the git info.
    'release': raven.fetch_git_sha(os.path.dirname(os.pardir)),
}

LOGGING['root'] = {                                     # noqa
    'level': 'INFO',
    'handlers': ['console', 'sentry'],
}

LOGGING['handlers']['sentry'] = {                       # noqa
    'level': 'ERROR',
    'class': 'raven.contrib.django.raven_compat.handlers.SentryHandler',
}
