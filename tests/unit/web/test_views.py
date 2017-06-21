from django.core.urlresolvers import reverse_lazy
from rest_framework import status
from rest_framework.test import APITestCase, APIClient


class CreateContactMessage(APITestCase):

    def setUp(self):
        self.client = APIClient(enforce_csrf_checks=True)
        self.url = reverse_lazy('web:contact_us')

        self.data = {
            'name': 'John Doe',
            'email': 'johndoe@doe.com',
            'message': 'Bar is not working with Foo'
        }

    def test_create_contact_message_with_all_data(self):
        if self.data['message']:
            response = self.client.post(self.url, self.data)
            expected = {'message': 'We have received your request and will contact you shortly.'}
            self.assertEqual(response.data, expected)
            self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_contact_message_with_no_data(self):
        del self.data['message']
        response = self.client.post(self.url, self.data)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
