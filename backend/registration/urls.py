from django.urls import path
from django.views import View
from .views import RegisterNewUser, RegistrationValidation, PasswordReset, PasswordResetValidation

urlpatterns = [
    path('auth/registration/', RegisterNewUser.as_view()),
    path('auth/registration/validation/', RegistrationValidation.as_view()),
    path('auth/password-reset/', PasswordReset.as_view()),
    path('auth/password-reset/validation/', PasswordResetValidation.as_view())
]
