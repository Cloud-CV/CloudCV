import os
import uuid

from django.utils.deconstruct import deconstructible


@deconstructible
class RandomFileName(object):
    def __init__(self, path):
        self.path = path

    def __call__(self, instance, filename):
        extension = os.path.splitext(filename)[1]
        path = 'demo_logs/log_{id}'
        self.path = path.format(id=instance.demo_log.id)
        filename = '{}{}'.format(uuid.uuid4(), extension)
        filename = os.path.join(self.path, filename)
        return filename
