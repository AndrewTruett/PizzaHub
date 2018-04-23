
# from django.contrib import admin
# from django.urls import path,include

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('posts/', include('posts.urls ')),
# ]



from django.conf.urls import url,include
from django.contrib import admin

urlpatterns = [
    url(r'^$',include('posts.urls')), #root url loads blog page using this  
    url(r'^admin/',admin.site.urls),
    url(r'^posts/',include('posts.urls')),
]