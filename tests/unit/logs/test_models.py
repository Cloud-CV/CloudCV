import os

from django.core.files.uploadedfile import SimpleUploadedFile
from tests.unit.demos.test_models import DemoTestCase
from logs.models import DemoLog, LogImage, LogText


class LogTestCase(DemoTestCase):

    def setUp(self):
        super(LogTestCase, self).setUp()

        try:
            os.makedirs('/tmp/cloudcv')
        except OSError:
            pass

        self.demo_log = DemoLog.objects.create(
            demo=self.demo,
            log_type='Submission'
        )

    def test__unicode__(self):
        log_type = self.demo_log.log_type
        demo_title = self.demo.title
        created_at = self.demo_log.created_at
        final_str = '{0}: {1}: {2}'.format(log_type, demo_title, created_at)
        self.assertEqual(final_str, self.demo_log.__str__())


class LogImageTestCase(LogTestCase):

    def setUp(self):
        super(LogImageTestCase, self).setUp()

        with self.settings(MEDIA_ROOT='/tmp/cloudcv'):
            self.demo_log_image = LogImage.objects.create(
                demo_log=self.demo_log,
                image=SimpleUploadedFile(
                    name='test_input.jpg',
                    content=open('frontend/src/images/cloudcv_logo.png', 'rb').read(),
                    content_type='image/png'
                ),
                image_type='Input'
            )

    def test__unicode__(self):
        image_url = self.demo_log_image.image.url
        image_type = self.demo_log_image.image_type
        final_str = '{0}: {1}'.format(image_url, image_type)
        self.assertEqual(final_str, self.demo_log_image.__str__())


class LogTextTestCase(LogTestCase):

    def setUp(self):
        super(LogTextTestCase, self).setUp()

        self.demo_log_text = LogText.objects.create(
            demo_log=self.demo_log,
            text='What is the color of logo?',
            text_type='Output'
        )

    def test__unicode__(self):
        text = self.demo_log_text.text
        text_type = self.demo_log_text.text_type
        final_str = '{0}: {1}'.format(text, text_type)
        self.assertEqual(final_str, self.demo_log_text.__str__())
