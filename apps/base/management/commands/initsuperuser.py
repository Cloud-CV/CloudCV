import os
from django.core.management.base import BaseCommand, CommandError
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'Creates a superuser using the environment variables'

    def handle(self, *args, **options):
        username = os.environ.get('DJANGO_USERNAME', 'admin')
        email = os.environ.get('DJANGO_EMAIL', 'admin@cloudcv.org')
        password = os.environ.get('DJANGO_PASSWORD', 'pass')
        try:
            User.objects.filter(username=username).exists() or User.objects.create_superuser(username, email, password)
        except:
            raise CommandError('DB is not connected properly')

        self.stdout.write(self.style.SUCCESS('Successfully created superuser'))
