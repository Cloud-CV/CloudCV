from rest_framework import serializers

from .models import Demo, Project


class DemoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Demo
        fields = ('title', 'demo_url', 'permalink', 'demo_base_url', 'tag_line', 'description', 'source_code_url',
                  'paper_description', 'paper_url', 'sample', 'text_inputs', 'image_inputs', 'text_outputs',
                  'image_outputs')


class ProjectSerializer(serializers.ModelSerializer):

    class Meta:
        model = Project
        fields = ('title', 'project_url', 'github_url', 'documentation_url', 'image')
