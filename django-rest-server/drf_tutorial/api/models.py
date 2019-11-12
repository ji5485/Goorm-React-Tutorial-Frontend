from django.db import models

# Create your models here.
class Phone(models.Model):
  name = models.CharField(max_length=20)
  phone = models.CharField(max_length=15)

  def __str__(self):
    return '{} {}'.format(self.name, self.phone)