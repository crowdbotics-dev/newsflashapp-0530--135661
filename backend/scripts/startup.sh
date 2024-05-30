#!/bin/bash

python manage.py migrate --noinput

waitress-serve --port=$PORT newsflashapp_0530__135661.wsgi:application
