from rest_framework import serializers

class EmisionesSerializer(serializers.Serializer):
    co2e_emission = serializers.FloatField()
    gas_name = serializers.CharField(max_length=255)
    year = serializers.CharField(max_length=4)
    state_name = serializers.CharField(max_length=255)