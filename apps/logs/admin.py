from django.contrib import admin

from base.admin import TimeStampedAdmin

from .models import DemoLog, LogImage, LogText


@admin.register(DemoLog)
class DemoLogAdmin(TimeStampedAdmin):
    list_display = ('demo', 'log_type',)
    list_filter = ('log_type',)


@admin.register(LogImage)
class LogImageAdmin(admin.ModelAdmin):
    list_filter = ('demo_log', 'image_type',)
    list_display = ('demo_log', 'image', 'image_type',)


@admin.register(LogText)
class LogTextAdmin(admin.ModelAdmin):
    list_filter = ('demo_log', 'text_type',)
    list_display = ('demo_log', 'text', 'text_type',)
    search_fields = ('text',)
