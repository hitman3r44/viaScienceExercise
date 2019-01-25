from rest_framework import viewsets

from .serializers import ViaSerializer
from ..models import Via


class ViaViewSet(viewsets.ModelViewSet):
    queryset = Via.objects.all()
    serializer_class = ViaSerializer
