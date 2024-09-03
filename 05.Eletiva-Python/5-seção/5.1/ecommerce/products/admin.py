from django.contrib import admin
from .models import Product, Customer

admin.site.site_header = "Trybe Products E-commerce"
admin.site.register(Product)
admin.site.register(Customer)
