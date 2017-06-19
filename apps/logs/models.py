from __future__ import unicode_literals

from django.db import models

from base.models import (TimeStampedModel, )
from base.utils import RandomFileName
from demos.models import (Demo, )


class DemoLog(TimeStampedModel):
    """Models representing details of the logs for each demo"""

    # Log type options
    SUBMISSION = 'Submission'
    BREAK = 'Break'

    LOG_TYPE_OPTIONS = (
        (SUBMISSION, SUBMISSION),
        (BREAK, BREAK),
    )

    demo = models.ForeignKey(Demo)
    log_type = models.CharField(max_length=30, choices=LOG_TYPE_OPTIONS)

    class Meta:
        app_label = 'logs'
        db_table = 'demo_logs'

    def __unicode__(self):
        return '{0}: {1}: {2}'.format(self.log_type, self.demo.title, self.created_at)


class LogImage(TimeStampedModel):
    """Models representing the images associated with demo logs"""

    # Image type options
    INPUT = 'Input'
    OUTPUT = 'Output'

    IMAGE_TYPE_OPTIONS = (
        (INPUT, INPUT),
        (OUTPUT, OUTPUT),
    )

    demo_log = models.ForeignKey(DemoLog)
    image = models.ImageField(upload_to=RandomFileName('demo_log_images'), default=False)
    image_type = models.CharField(max_length=10, choices=IMAGE_TYPE_OPTIONS)

    class Meta:
        app_label = 'logs'
        db_table = 'log_images'

    def __unicode__(self):
        return '{0}: {1}'.format(self.image.url, self.image_type)


class LogText(TimeStampedModel):
    """Models representing the texts associated with demo logs"""

    # Text type options
    INPUT = 'Input'
    OUTPUT = 'Output'

    TEXT_TYPE_OPTIONS = (
        (INPUT, INPUT),
        (OUTPUT, OUTPUT),
    )

    demo_log = models.ForeignKey(DemoLog)
    text = models.CharField(max_length=50)
    text_type = models.CharField(max_length=10, choices=TEXT_TYPE_OPTIONS)

    class Meta:
        app_label = 'logs'
        db_table = 'log_texts'

    def __unicode__(self):
        return '{0}: {1}'.format(self.text, self.text_type)
