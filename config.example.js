// Example configuration file
// Copy this to config.js and fill in your actual Twilio credentials

module.exports = {
  twilio: {
    accountSid: 'your_account_sid_here',
    authToken: 'your_auth_token_here',
    phoneNumber: 'your_twilio_phone_number_here'
  },
  server: {
    port: process.env.PORT || 3001
  }
};

/*
Instructions:
1. Copy this file to config.js
2. Replace the placeholder values with your actual Twilio credentials
3. Get your credentials from: https://console.twilio.com/
4. Never commit config.js to version control
*/ 