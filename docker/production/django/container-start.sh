#!/bin/sh
cd /code && \
python manage.py migrate --noinput --settings=settings.prod.settings && \
python manage.py initsuperuser --settings=settings.prod.settings && \
python manage.py collectstatic --noinput --settings.prod.settings && \
python manage.py runserver --settings=settings.prod.settings 0.0.0.0:8000
