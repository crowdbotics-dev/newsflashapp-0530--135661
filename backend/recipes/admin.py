from django.contrib import admin
from .models import Comment, Recipe, Tag

admin.site.register(Comment)
admin.site.register(Tag)
admin.site.register(Recipe)

# Register your models here.
