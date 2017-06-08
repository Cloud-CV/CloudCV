#!/bin/sh
cd /code && \
python manage.py migrate --noinput --settings=settings.prod && \
python manage.py runserver --settings=settings.prod 0.0.0.0:8000
