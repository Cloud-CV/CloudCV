#!/bin/sh
cd /code && \
python manage.py migrate --noinput --settings=settings.staging.settings && \
python manage.py runserver --settings=settings.staging.settings 0.0.0.0:8000
