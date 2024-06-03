from django.contrib import admin
from .models import Poll, PollOption, PollResponse

admin.site.register(PollOption)
admin.site.register(Poll)
admin.site.register(PollResponse)

# Register your models here.
