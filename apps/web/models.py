from __future__ import unicode_literals

from django.db import models

from base.models import (TimeStampedModel, )


class Contact(TimeStampedModel):
    """Model representing details of User submitting queries."""
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100)
    message = models.CharField(max_length=500)
    image = models.ImageField(upload_to='screenshots', null=True, blank=True)

    def __unicode__(self):
        return '{0}: {1}: {2}'.format(self.name, self.email, self.message)

    class Meta:
        app_label = 'web'
        db_table = 'contact_us'


class Team(models.Model):
    """Model representing details of Team"""

    # Team Type Options
    TEAM = 'Team'
    INTERN = 'GSoC Students, Mentors and Interns'
    CONTRIBUTOR = 'Contributors'

    TEAM_TYPE_OPTIONS = (
        (TEAM, TEAM),
        (INTERN, INTERN),
        (CONTRIBUTOR, CONTRIBUTOR),
    )

    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=100, null=True, blank=True)
    description = models.TextField(null=True)
    image = models.ImageField(upload_to='team', null=True, blank=True)
    visible = models.BooleanField(default=False)
    github_url = models.URLField(max_length=200, null=True, blank=True)
    linkedin_url = models.URLField(max_length=200, null=True, blank=True)
    personal_website = models.URLField(max_length=200, null=True, blank=True)
    team_type = models.CharField(choices=TEAM_TYPE_OPTIONS, max_length=50)
    year = models.IntegerField(null=True, blank=True)

    def __unicode__(self):
        return self.name

    class Meta:
        app_label = 'web'
        db_table = 'team'
