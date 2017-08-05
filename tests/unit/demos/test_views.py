import os
from django.core.urlresolvers import reverse_lazy
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.files.uploadedfile import SimpleUploadedFile

from demos.models import Demo, Project


class GetDemoTest(APITestCase):

    def setUp(self):
        self.url = reverse_lazy('demos:get_demos')

        self.demo = Demo.objects.create(
            title='title',
            demo_url='www.github.com/Cloud-CV',
            demo_base_url='http://cloudcv.org/',
            permalink='classify',
            tag_line='Tag line for demo',
            description='Description for demo',
            source_code_url='www.github.com/Cloud-CV',
            paper_description='www.github.com/Cloud-CV',
            paper_url='www.linkedin.com/testuser',
            is_disabled=False,
            sample=False,
            text_inputs=1,
            image_inputs=1,
            text_outputs=1,
            image_outputs=0
        )

    def test_demo_get_request(self):
        response = self.client.get(self.url)
        expected = [
            {
                'title': self.demo.title,
                'demo_url': self.demo.demo_url,
                'demo_base_url': self.demo.demo_base_url,
                'permalink': self.demo.permalink,
                'description': self.demo.description,
                'tag_line': self.demo.tag_line,
                'source_code_url': self.demo.source_code_url,
                'paper_description': self.demo.paper_description,
                'paper_url': self.demo.paper_url,
                'sample': self.demo.sample,
                'text_inputs': self.demo.text_inputs,
                'image_inputs': self.demo.image_inputs,
                'text_outputs': self.demo.text_outputs,
                'image_outputs': self.demo.image_outputs
            }
        ]
        self.assertEqual(response.data, expected)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class GetProjectTest(APITestCase):

    def setUp(self):
        try:
            os.makedirs('/tmp/cloudcv')
        except OSError:
            pass

        self.url = reverse_lazy('demos:get_projects')

        with self.settings(MEDIA_ROOT='/tmp/cloudcv'):
            self.project = Project.objects.create(
                title='Origami',
                project_url='http://origami.cloudcv.org',
                github_url='http://github.com/Cloud-CV/origami',
                documentation_url='http://origami.cloudcv.org/libdocs/',
                image=SimpleUploadedFile(
                    name='test_image.jpg',
                    content=open('frontend/src/images/cloudcv_logo.png', 'rb').read(),
                    content_type='image/png'
                ),
                is_visible=True
            )

    def test_project_get_request(self):
        response = self.client.get(self.url)
        expected = [
            {
                'title': self.project.title,
                'project_url': self.project.project_url,
                'github_url': self.project.github_url,
                'documentation_url': self.project.documentation_url,
                'image': 'http://testserver%s' % self.project.image.url
            }
        ]
        self.assertEqual(response.data, expected)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
