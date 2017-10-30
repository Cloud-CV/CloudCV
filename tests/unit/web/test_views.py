import os
from django.core.urlresolvers import reverse_lazy
from django.core.files.uploadedfile import SimpleUploadedFile
from rest_framework import status
from rest_framework.test import APITestCase, APIClient

from web.models import Team


class CreateContactMessage(APITestCase):

    def setUp(self):
        self.client = APIClient(enforce_csrf_checks=True)
        self.url = reverse_lazy('web:contact_us')

        self.data = {
            'name': 'John Doe',
            'email': 'johndoe@doe.com',
            'message': 'Bar is not working with Foo'
        }

    def test_create_contact_message_with_all_data(self):
        if self.data['message']:
            response = self.client.post(self.url, self.data)
            expected = {'message': 'We have received your request and will contact you shortly.'}
            self.assertEqual(response.data, expected)
            self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_contact_message_with_no_data(self):
        del self.data['message']
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


class GetTeamTest(APITestCase):

    def setUp(self):
        try:
            os.makedirs('/tmp/cloudcv')
        except OSError:
            pass

        self.url = reverse_lazy('web:get_team_members')

        with self.settings(MEDIA_ROOT='/tmp/cloudcv'):
            self.team_member = Team.objects.create(
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
                year=2017,
                visible=True,
            )

    def test_team_get_request(self):
        response = self.client.get(self.url)
        expected = [
            {
                'name': self.team_member.name,
                'email': self.team_member.email,
                'description': self.team_member.description,
                'image': 'http://testserver%s' % self.team_member.image.url,
                'github_url': self.team_member.github_url,
                'linkedin_url': self.team_member.linkedin_url,
                'personal_website': self.team_member.personal_website,
                'team_type': self.team_member.team_type,
                'year': self.team_member.year
            }
        ]
        self.assertEqual(response.data, expected)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
