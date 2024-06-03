from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import PollViewSet, PollOptionViewSet, PollResponseViewSet

router = DefaultRouter()
router.register("polloption", PollOptionViewSet)
router.register("poll", PollViewSet)
router.register("pollresponse", PollResponseViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
