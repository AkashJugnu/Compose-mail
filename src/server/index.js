const express = require('express');
const app = express();
var path = require('path');
const formidable = require('formidable');
const sgMail = require('@sendgrid/mail');

app.use(express.static('dist'));

function sendMail(to, from, subject, text) {

	sgMail.setApiKey('');
	const msg = {
  		to: to,
  		from: from,
  		subject: subject,
  		text: text
  		//html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};
	return sgMail.send(msg);
}

app.post('/send', function(req, res) {
	console.log('send');
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, file){
		console.log(fields);
		sendMail(fields.address, 'jugnu.pu.2k16@gmail.com', fields.subject, fields.body);
		res.redirect('/');
	});
})

var server = app.listen(7000, function() {
  console.log('7000');
});
