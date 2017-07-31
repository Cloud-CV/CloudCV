from rest_framework import permissions, status
from rest_framework.decorators import (api_view, permission_classes, throttle_classes,)
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

from .models import Demo
from .serializers import DemoSerializer


@throttle_classes([AnonRateThrottle, ])
@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_demos(request):
    """
    Get a list of team members
    """
    demos = Demo.objects.filter(is_disabled=False).order_by('title')
    serializer = DemoSerializer(demos, many=True, context={'request': request})
    response_data = serializer.data
    return Response(response_data, status=status.HTTP_200_OK)
