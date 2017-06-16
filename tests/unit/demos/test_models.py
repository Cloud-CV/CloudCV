from django.test import TestCase

from demos.models import Demo


class DemoTestCase(TestCase):

    def setUp(self):
        super(DemoTestCase, self).setUp()

        self.demo = Demo.objects.create(
            title='CloudCV Classification',
            demo_url='http://cloudcv.org/classify/',
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
