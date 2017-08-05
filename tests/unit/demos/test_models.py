import os
from django.test import TestCase
from django.core.files.uploadedfile import SimpleUploadedFile

from demos.models import Demo, Project


class DemoTestCase(TestCase):

    def setUp(self):
        super(DemoTestCase, self).setUp()

        self.demo = Demo.objects.create(
            title='CloudCV Classification',
            demo_url='http://cloudcv.org/classify/',
            demo_base_url='http://cloudcv.org/',
            permalink='classify',
            tag_line='Use CloudCV to automatically find which objects are present in an image',
            description='Click on one of these images to send it to our servers (Or upload your own images below)',
            sample=True,
            text_inputs=0,
            image_inputs=1,
            text_outputs=1,
            image_outputs=0,
        )

    def test__unicode__(self):
        title = self.demo.title
        demo_url = self.demo.demo_url
        final_str = '{0}: {1}'.format(title, demo_url)
        self.assertEqual(final_str, self.demo.__str__())


class ProjectTestCase(TestCase):

    def setUp(self):
        super(ProjectTestCase, self).setUp()

        try:
            os.makedirs('/tmp/cloudcv')
        except OSError:
            pass

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
            )

    def test__unicode__(self):
        title = self.project.title
        project_url = self.project.project_url
        final_str = '{0}: {1}'.format(title, project_url)
        self.assertEqual(final_str, self.project.__str__())
