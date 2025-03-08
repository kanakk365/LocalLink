from django.db import models
from django.contrib.auth.models import User
import uuid
# Create your models here.
class deliveryPartner(models.Model):
    user =  models.ForeignKey(User,on_delete=models.CASCADE)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    aadhar_card = models.IntegerField(max_length=12)
    pan_card = models.CharField(max_length=30)
    email_id = models.CharField(max_length=20)
    phone_number = models.IntegerField(max_length=11)
    is_delivery = models.BooleanField(default=False)
    

class deliveryPartnerStatus(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    source = models.CharField(max_length=100)
    destination = models.CharField(max_length=100)
    time = models.CharField(max_length=100)

class userItembid(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    item_purchase = models.CharField(max_length=100)
    item_delivery_address = models.CharField(max_length=100)
    item_name = models.CharField(max_length=500)  #this could be list of items
    item_price = models.CharField(max_length=100) 

class itemStatus(models.Model):
    id = models.ForeignKey(userItembid,on_delete=models.CASCADE)
    is_accepted = models.BooleanField(default=False)


class deliveryPartnerAssigned(models.Model):
    id = models.ForeignKey(userItembid,on_delete=models.CASCADE)
    




class deliveryPartnerLocation(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    destination = models.CharField(max_length=50)
    current_location = models.CharField(max_length=50)
    last_updated = models.CharField(max_length=30)

class deliverParrtnerBankDetails(models.Model):

    user = models.ForeignKey(User,on_delete=models.CASCADE)
    bank_name = models.CharField(max_length=200)
    account_number = models.IntegerField(max_length=50)
    ifsc_code = models.CharField(max_length=30)
    