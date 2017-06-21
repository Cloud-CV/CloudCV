from rest_framework import serializers

from .models import Contact, Team


class ContactSerializer(serializers.ModelSerializer):

    class Meta:
        model = Contact
        fields = ('name', 'email', 'message', 'image')


class TeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = ('name', 'email', 'description', 'image', 'github_url', 'linkedin_url', 'personal_website',
                  'team_type')
