from django.contrib import admin

from .models import Demo


@admin.register(Demo)
class DemoAdmin(admin.ModelAdmin):
    list_display = ('title', 'tag_line', 'is_disabled',)
    list_filter = ('is_disabled',)
    search_fields = ('title',)
