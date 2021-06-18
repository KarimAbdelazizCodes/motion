from django.urls import path
from django.views import View
from .views import RegisterNewUser, RegistrationValidation

urlpatterns = [
    path('auth/registration/', RegisterNewUser.as_view()),
    path('auth/registration/validation/', RegistrationValidation.as_view())
]
