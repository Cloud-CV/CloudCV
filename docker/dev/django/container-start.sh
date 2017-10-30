#!/bin/sh
cd /code && \
python manage.py migrate --noinput --settings=settings.dev.settings && \
python manage.py initsuperuser --settings=settings.dev.settings && \
python manage.py runserver --settings=settings.dev.settings 0.0.0.0:8000
