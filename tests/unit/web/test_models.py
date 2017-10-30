import os

from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile

from web.models import Contact, Team


class ContactTestCase(TestCase):

    def setUp(self):
        super(ContactTestCase, self).setUp()

        try:
            os.makedirs('/tmp/cloudcv')
        except OSError:
            pass

        with self.settings(MEDIA_ROOT='/tmp/cloudcv'):
            self.contact = Contact.objects.create(
                name='user',
                email='user@domain.com',
                message='test message',
                image=SimpleUploadedFile(
                    name='test_screnshot.jpg',
                    content=open('frontend/src/images/cloudcv_logo.png', 'rb').read(),
                    content_type='image/png'
                )
            )

    def test__unicode__(self):
        name = self.contact.name
        email = self.contact.email
        message = self.contact.message
        final_string = '{0}: {1}: {2}'.format(name, email, message)
        self.assertEqual(final_string, self.contact.__str__())


class TeamTestCase(TestCase):

    def setUp(self):
        super(TeamTestCase, self).setUp()

        try:
            os.makedirs('/tmp/cloudcv')
        except OSError:
            pass

        with self.settings(MEDIA_ROOT='/tmp/cloudcv'):
            self.team = Team.objects.create(
                name='user',
                email='test@user.com',
                description='Description for Test User',
                image=SimpleUploadedFile(
                    name='test_image.jpg',
                    content=open('frontend/src/images/cloudcv_logo.png', 'rb').read(),
                    content_type='image/png'
                ),
                github_url='www.github.com/Cloud-CV',
                linkedin_url='www.linkedin.com/testuser',
                personal_website='CloudCV.org',
                team_type=Team.TEAM,
                visible=True,
            )

    def test__unicode__(self):
        self.assertEqual(self.team.name, self.team.__str__())
