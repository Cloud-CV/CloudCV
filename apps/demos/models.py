from __future__ import unicode_literals

from django.db import models


class Demo(models.Model):
    """"Models representing details of Demo."""
    title = models.CharField(max_length=40)
    demo_url = models.URLField(max_length=200)
    demo_base_url = models.URLField(max_length=100)
    permalink = models.CharField(max_length=100)
    tag_line = models.CharField(max_length=140, null=True, blank=True)
    description = models.CharField(max_length=500, null=True, blank=True)
    source_code_url = models.URLField(max_length=100, null=True, blank=True)
    paper_description = models.CharField(max_length=200, null=True, blank=True)
    paper_url = models.URLField(max_length=100, null=True, blank=True)
    is_disabled = models.BooleanField(default=False)
    sample = models.BooleanField(default=False)
    from_origami = models.BooleanField(default=True)
    text_inputs = models.IntegerField()
    image_inputs = models.IntegerField()
    text_outputs = models.IntegerField()
    image_outputs = models.IntegerField()

    class Meta:
        app_label = 'demos'
        db_table = 'demos'

    def __unicode__(self):
        return '{0}: {1}'.format(self.title, self.demo_url)


class Project(models.Model):
    """"Models representing details of Project."""
    title = models.CharField(max_length=40)
    project_url = models.URLField(max_length=200)
    github_url = models.URLField(max_length=200, null=True, blank=True)
    documentation_url = models.URLField(max_length=200, null=True, blank=True)
    image = models.ImageField(upload_to='team', null=True, blank=True)
    is_visible = models.BooleanField(default=False)

    class Meta:
        app_label = 'demos'
        db_table = 'projects'

    def __unicode__(self):
        return '{0}: {1}'.format(self.title, self.project_url)
