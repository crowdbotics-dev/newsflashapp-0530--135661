from rest_framework import authentication
from community.models import PollOption, Poll, PollResponse
from .serializers import PollSerializer, PollOptionSerializer, PollResponseSerializer
from rest_framework import viewsets


class PollOptionViewSet(viewsets.ModelViewSet):
    serializer_class = PollOptionSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = PollOption.objects.all()


class PollViewSet(viewsets.ModelViewSet):
    serializer_class = PollSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = Poll.objects.all()


class PollResponseViewSet(viewsets.ModelViewSet):
    serializer_class = PollResponseSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = PollResponse.objects.all()
