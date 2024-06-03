# Generated by Django 3.2.25 on 2024-06-03 15:53

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Poll',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('ends_at', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='PollOption',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option_text', models.CharField(max_length=255)),
                ('poll', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='polloption_poll', to='community.poll')),
            ],
        ),
        migrations.CreateModel(
            name='PollResponse',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('poll_option', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pollresponse_poll_option', to='community.polloption')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pollresponse_user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
