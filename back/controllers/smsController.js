import twilio from 'twilio';

// Use environment variables for sensitive data
const accountSid = process.env.TWILIO_ACCOUNT_SID || 'your_account_sid_here';
const authToken = process.env.TWILIO_AUTH_TOKEN || 'your_auth_token_here';
const twilioPhone = process.env.TWILIO_PHONE_NUMBER || 'your_twilio_phone_here';

const client = twilio(accountSid, authToken);

export async function sendSMS(req, res) {
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
} 