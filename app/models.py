from django.db import models

class Emisiones(models.Model):
    co2e_emission = models.FloatField()
    gas_name = models.CharField(max_length=100)
    year = models.CharField(max_length=4)
    state_name = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.gas_name} - {self.year} - {self.co2e_emission} - {self.state_name}"
