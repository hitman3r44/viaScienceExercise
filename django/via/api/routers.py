from rest_framework import routers

from .viewsets import ViaViewSet

router = routers.DefaultRouter()
router.register('via', ViaViewSet)
