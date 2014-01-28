var paypal_sdk = require('paypal-rest-sdk');
    paypal_sdk.configure({
      'host': 'api.sandbox.paypal.com',
      'client_id': 'AeN1NRCR3P4Jhlh5iXCyMs_6iRjGadHoa1Jk3Lu1ey2DF592AgFQIPT_Y9GA',
      'client_secret': 'EPT2gxCtYpCUeXO651SAJeTCPXuH4xHiHdabtZy2TC9hXY_CUaSjmDnJ6P9K' });


var express = require('express');
var app = module.exports = express();

    paypal_sdk.generate_token(function(error, token){
      if(error){
        console.error(error);
      } else {
          console.log(token);
        }
    });


app.post('/sendtopaypal', function(req,res){
    var Pamount= req.body.amount;

    var payment_details = {
      "intent": "sale", // payment is delayed and to be captured at a later time
      "payer": {
        "payment_method": "paypal"}
      "transactions": [{
        "amount": {
          "total": Pamount,
          "currency": "USD"}}];
      
     paypal_sdk.payment.create(payment_details, function(error, payment)) { // create payment
       if(error) {
         console.error(error);
       } else {
         console.log(payment);
       }    
     }};
});


