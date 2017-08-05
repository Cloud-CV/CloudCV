from django.contrib import admin

from .models import Demo, Project


@admin.register(Demo)
class DemoAdmin(admin.ModelAdmin):
    list_display = ('title', 'tag_line', 'is_disabled',)
    list_filter = ('is_disabled',)
    search_fields = ('title',)


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('title', 'project_url', 'is_visible',)
    list_filter = ('is_visible',)
    search_fields = ('title',)
