from django.conf import settings
from django.db import models


class Comment(models.Model):
    "Generated Model"
    recipe = models.ForeignKey(
        "recipes.Recipe",
        on_delete=models.CASCADE,
        related_name="comment_recipe",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="comment_user",
    )
    content = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True,
    )


class Tag(models.Model):
    "Generated Model"
    name = models.CharField(
        max_length=50,
    )


class Recipe(models.Model):
    "Generated Model"
    title = models.CharField(
        max_length=255,
    )
    description = models.TextField()
    photo = models.ImageField(
        null=True,
        blank=True,
    )
    video = models.FileField(
        null=True,
        blank=True,
    )
    creator = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="recipe_creator",
    )
    ingredients = models.TextField()
    preparation_steps = models.TextField()
    nutritional_info = models.TextField(
        null=True,
        blank=True,
    )
    serving_calculator = models.TextField(
        null=True,
        blank=True,
    )
    cuisine_type = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    dietary_restrictions = models.CharField(
        max_length=100,
        null=True,
        blank=True,
    )
    tags = models.ManyToManyField(
        "recipes.Tag",
        related_name="recipe_tags",
    )


# Create your models here.
