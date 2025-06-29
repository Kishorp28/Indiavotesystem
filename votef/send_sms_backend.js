// Simple Express backend for sending SMS with Twilio
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const twilio = require('twilio');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Use environment variables for sensitive data
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'your_account_sid_here';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'your_auth_token_here';
const twilioPhone = process.env.TWILIO_PHONE_NUMBER || 'your_twilio_phone_here';

const client = twilio(accountSid, authToken);

app.post('/send-sms', async (req, res) => {
    const { mobile, voterId } = req.body;
    if (!mobile || !voterId) {
        return res.status(400).json({ error: 'Missing mobile or voterId' });
    }
    try {
        const message = await client.messages.create({
            body: `Your Voter ID is: ${voterId}`,
            from: twilioPhone,
            to: `+91${mobile}`
        });
        res.json({ success: true, sid: message.sid });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Twilio SMS backend running on port ${PORT}`);
});

/*
Instructions:
1. Install dependencies: npm install express body-parser cors twilio
2. Set environment variables:
   - TWILIO_ACCOUNT_SID=your_actual_account_sid
   - TWILIO_AUTH_TOKEN=your_actual_auth_token
   - TWILIO_PHONE_NUMBER=your_twilio_phone_number
3. Start the server: node send_sms_backend.js
4. Update your frontend to POST to http://localhost:3001/send-sms with JSON { mobile, voterId }
*/ 