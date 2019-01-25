from django.db import models


# Create your models here.

class Via(models.Model):
    name = models.CharField(blank=True, max_length=100)

    class Meta:
        default_related_name = 'via'
        verbose_name = 'via'
        verbose_name_plural = 'via'

    def __str__(self):
        return self.name
