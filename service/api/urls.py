from django.conf.urls import url
import views

urlpatterns = [
    url(r'^$', views.api_root),
    url(r'^collections/$', views.CollectionList.as_view(), name='collection-list'),
    url(r'^collections/(?P<pk>\w+)/$', views.CollectionDetail.as_view(), name='collection-detail'),
    url(r'^collections/(?P<pk>\w+)/items/$', views.CollectionItemList.as_view(), name='collection-items'),
    url(r'^collections/(?P<pk>\w+)/items/(?P<item_id>\w+)/$', views.ItemDetail.as_view(), name='collection-item-detail'),
    url(r'^items/$', views.ItemList.as_view(), name='item-list'),
    url(r'^items/(?P<item_id>\w+)/$', views.ItemDetail.as_view(), name='item-detail'),
]
