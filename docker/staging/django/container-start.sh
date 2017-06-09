#!/bin/sh
cd /code && \
python manage.py migrate --noinput --settings=settings.staging && \
python manage.py runserver --settings=settings.staging 0.0.0.0:8000
