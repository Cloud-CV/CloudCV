import logging
from rest_framework import permissions, status
from rest_framework.decorators import (api_view, permission_classes, throttle_classes,)
from rest_framework.response import Response
from rest_framework.throttling import AnonRateThrottle
from base64 import b64decode
from django.core.files.base import ContentFile

from demos.models import Demo
from .models import DemoLog, LogImage, LogText


@throttle_classes([AnonRateThrottle, ])
@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def post_log(request, demo_permalink):
    """
    Create and save a log
    """
    demo = Demo.objects.get(permalink=demo_permalink)
    log_type = request.POST.get('log_type')
    if not demo:
        error_message = {'error': 'Demo not found!'}
        return Response(error_message, status=status.HTTP_404_NOT_FOUND)

    try:
        demo_log = DemoLog.objects.create(
            demo=demo,
            log_type=log_type
        )
    except Exception:
        error_message = {'error': 'Demo log could not be created'}
        return Response(error_message, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    if log_type == 'Submission':
        i = 0
        try:
            while True:
                textdata = request.data['input-text-{}'.format(i)]
                LogText.objects.create(
                    demo_log=demo_log,
                    text=textdata,
                    text_type='Input'
                )
                i += 1
        except Exception:
            logging.exception('Key not found while saving input')
            pass

        imagedata = []
        i = 0
        try:
            while True:
                imagedata = request.FILES['input-image-{}'.format(i)]
                LogImage.objects.create(
                    demo_log=demo_log,
                    image=imagedata,
                    image_type='Input'
                )
                i += 1
        except Exception:
            logging.exception('Key not found while saving output')
            pass

    success_message = {'success': {'id': demo_log.id}}
    return Response(success_message, status=status.HTTP_200_OK)


@throttle_classes([AnonRateThrottle, ])
@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def post_output(request, log_id):
    """
    Get a list of projects
    """
    demo_log = DemoLog.objects.get(id=log_id)
    if not demo_log:
        error_message = {'error': 'Demo log not found!'}
        return Response(error_message, status=status.HTTP_404_NOT_FOUND)

    count_image_inputs = demo_log.demo.image_inputs
    count_text_inputs = demo_log.demo.text_inputs

    if count_image_inputs > 0 and count_text_inputs == 0:
        for image in request.data:
            image = str(image).split(",")[1]
            missing_padding = len(image) % 4
            if missing_padding != 0:
                image += b'=' * (4 - missing_padding)
            image_data = b64decode(image)
            LogImage.objects.create(
                demo_log=demo_log,
                image=ContentFile(image_data, 'whatup.png'),
                image_type='Output'
            )
    elif count_text_inputs > 0 and count_image_inputs == 0:
        for text in request.data:
            LogText.objects.create(
                demo_log=demo_log,
                text=text,
                text_type='Output'
            )
    success_message = {'success': 'OK'}
    return Response(success_message, status=status.HTTP_200_OK)
