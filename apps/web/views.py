from rest_framework import permissions, status
from rest_framework.decorators import (api_view, permission_classes, throttle_classes,)
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle

from .models import Team
from .serializers import ContactSerializer, TeamSerializer


@throttle_classes([AnonRateThrottle, ])
@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def contact_us(request):
    """
    Create a new contact response
    """
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        response_data = {'message': 'We have received your request and will contact you shortly.'}
        return Response(response_data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@throttle_classes([AnonRateThrottle, ])
@api_view(['GET'])
@permission_classes((permissions.AllowAny,))
def get_team_members(request):
    """
    Get a list of team members
    """
    members = Team.objects.filter(visible=True)
    serializer = TeamSerializer(members, many=True, context={'request': request})
    response_data = serializer.data
    return Response(response_data, status=status.HTTP_200_OK)
