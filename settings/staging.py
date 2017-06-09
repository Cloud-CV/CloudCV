from .prod import * # noqa: ignore=F405

ALLOWED_HOSTS = ["cloudcv-staging.us-west-2.elasticbeanstalk.com"]

# static files configuration on S3
STATICFILES_LOCATION = 'staging/static'
STATIC_URL = "https://%s/%s/" % (AWS_S3_CUSTOM_DOMAIN, STATICFILES_LOCATION) # noqa
STATICFILES_STORAGE = 'settings.staging_custom_storages.StaticStorage'

# Media files configuration on S3
MEDIAFILES_LOCATION = 'staging/media'
MEDIA_URL = "https://%s/%s/" % (AWS_S3_CUSTOM_DOMAIN, MEDIAFILES_LOCATION) # noqa
DEFAULT_FILE_STORAGE = 'settings.staging_custom_storages.MediaStorage'
