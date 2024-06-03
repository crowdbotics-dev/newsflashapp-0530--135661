from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CommentViewSet, RecipeViewSet, TagViewSet

router = DefaultRouter()
router.register("comment", CommentViewSet)
router.register("tag", TagViewSet)
router.register("recipe", RecipeViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
