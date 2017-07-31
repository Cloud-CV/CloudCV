from rest_framework import serializers

from .models import Demo


class DemoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Demo
        fields = ('title', 'demo_url', 'tag_line', 'description', 'source_code_url', 'paper_description', 'paper_url',
                  'sample', 'text_inputs', 'image_inputs', 'text_outputs', 'image_outputs')
