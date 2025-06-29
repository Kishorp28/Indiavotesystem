import express from 'express';
import { castVote, getVotes } from '../controllers/voteController.js';
const router = express.Router();

router.post('/', castVote);
router.get('/', getVotes);

export default router; 