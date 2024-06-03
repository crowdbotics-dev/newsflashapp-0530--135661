from django.conf import settings
from django.db import models


class PollOption(models.Model):
    "Generated Model"
    poll = models.ForeignKey(
        "community.Poll",
        on_delete=models.CASCADE,
        related_name="polloption_poll",
    )
    option_text = models.CharField(
        max_length=255,
    )


class Poll(models.Model):
    "Generated Model"
    question = models.CharField(
        max_length=255,
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
    )
    ends_at = models.DateTimeField(
        null=True,
        blank=True,
    )


class PollResponse(models.Model):
    "Generated Model"
    poll_option = models.ForeignKey(
        "community.PollOption",
        on_delete=models.CASCADE,
        related_name="pollresponse_poll_option",
    )
    user = models.ForeignKey(
        "users.User",
        on_delete=models.CASCADE,
        related_name="pollresponse_user",
    )


# Create your models here.
