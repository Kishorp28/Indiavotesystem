import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import candidateRoutes from './routes/candidateRoutes.js';
import voteRoutes from './routes/voteRoutes.js';
import smsRoutes from './routes/smsRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '2mb' }));

app.use('/candidates', candidateRoutes);
app.use('/votes', voteRoutes);
app.use('/send-sms', smsRoutes);

export default app; 