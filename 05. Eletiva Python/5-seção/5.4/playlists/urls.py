# playlists/urls.py

from django.urls import path
from playlists.views import music, singer, index


urlpatterns = [
    path("", index, name="home-page"),
    path("music/", music, name="musics-page"),
    path("singers/", singer, name="singers-page"),
]
