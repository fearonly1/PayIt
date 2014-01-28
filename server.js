var http=require('http');
var url = require('url');
var fs = require('fs');
var querystring = require('querystring');


var paypal_sdk = require('paypal-rest-sdk');
paypal_sdk.configure({
		'host': 'api.sandbox.paypal.com',
		'client_id': 'AeN1NRCR3P4Jhlh5iXCyMs_6iRjGadHoa1Jk3Lu1ey2DF592AgFQIPT_Y9GA',
		'client_secret': 'EPT2gxCtYpCUeXO651SAJeTCPXuH4xHiHdabtZy2TC9hXY_CUaSjmDnJ6P9K' });

paypal_sdk.generate_token(function(error, token){
		if(error){
		console.error(error);
		} else {
		console.log(token);
		}
		}); 

http.createServer(function(req,res){
		console.log("Request received.")
		if ((req.type=="POST") && false){
		//Do stuff with other file here
		if (pathname=="/sendtopaypal"){
		var Pamount= req.body.amount;

		var payment_details = {
		"intent": "sale", // payment is delayed and to be captured at a later time
		"payer": {
		"payment_method": "paypal"},
		"transactions": [{
		"amount": {
		"total": Pamount,
		"currency": "USD"}}]};

		paypal_sdk.payment.create(payment_details, function(error, payment) { // create payment
			if(error) {
			console.error(error);
			} else {
			console.log(payment);
			}    
			});

		}
		}else{
			console.log("GET Request received.")
				var pathname = url.parse(req.url).pathname;
			console.log(pathname);
			if (pathname == "/logged.php"){
				fs.readFile("logged.php",function(err,html){
						res.writeHeader(200,{'content-type':'text/html'});
						res.write(html);
						res.end();
						})
			}else if (pathname == "/"){
				fs.readFile("landing.php",function(err,html){
						res.writeHeader(200,{'content-type':'text/html'});
						res.write(html);
						res.end();
						})
			}else{
				res.writeHeader(404,{'content-type':'text/plain'})
					res.write("404: File not Found.");
				res.end();
			}
		}
}).listen(8080,function(){
	console.log("HTTP started...")
	})
