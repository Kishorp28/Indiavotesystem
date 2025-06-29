import connectDB from '../utils/db.js';

export async function castVote(req, res) {
  const { candidateName } = req.body;
  if (!candidateName) {
    return res.status(400).json({ error: 'Candidate name missing' });
  }
  try {
    const db = await connectDB();
    await db.collection('votes').insertOne({
      candidateName,
      timestamp: new Date()
    });
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getVotes(req, res) {
  try {
    const db = await connectDB();
    const votes = await db.collection('votes').find().toArray();
    res.json(votes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

function CastVoteComponent() {
    const wrapper = document.createElement('div');
    wrapper.className = 'cast-vote-section';

    const img = document.createElement('img');
    img.src = 'https://media.licdn.com/dms/image/v2/D5622AQFfMvou_UHKpA/feedshare-shrink_800/feedshare-shrink_800/0/1713767212034?e=2147483647&v=beta&t=6WOaQpZwJYI-MzWGK6nhUEwtyW898RbvjAcY-gF0UcQ';
    img.className = 'voter-img';
    img.alt = 'Indian Voter';

    const btnWrapper = document.createElement('div');
    btnWrapper.className = 'vote-btn-wrapper';

    const a = document.createElement('a');
    a.href = 'castvote.html';

    const btn = document.createElement('button');
    btn.id = 'castVoteBtn';
    btn.textContent = 'Cast Vote';

    a.appendChild(btn);
    btnWrapper.appendChild(a);

    wrapper.appendChild(img);
    wrapper.appendChild(btnWrapper);

    return wrapper;
}

function renderCastVoteComponent() {
    const section = document.getElementById('castVoteSection');
    section.innerHTML = '';
    section.appendChild(CastVoteComponent());
} 