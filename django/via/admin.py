from django.contrib import admin

from .models import Via


class ViaAdmin(admin.ModelAdmin):
    pass


admin.site.register(Via, ViaAdmin)
