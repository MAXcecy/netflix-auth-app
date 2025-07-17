from django.urls import path
#from . import views
from .views import RegisterView, LoginView

urlpatterns = [
    #path('login/', views.login_view),
    #path('register/', views.register_view),
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
]