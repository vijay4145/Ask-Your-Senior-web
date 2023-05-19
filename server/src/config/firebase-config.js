var admin = require("firebase-admin");
require('dotenv').config();

var serviceAccount = 
{
  "type": "service_account",
  "project_id": "ask-your-senior",
  "private_key_id": process.env.private_key_id,
  "private_key": process.env.PRIVATE_KEY,
  "client_email": process.env.client_email,
  "client_id": process.env.client_id,
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": process.env.client_x509_cert_url
}


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


module.exports = {admin};