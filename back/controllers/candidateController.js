import * as Candidate from '../models/candidateModel.js';

export async function getAllCandidates(req, res) {
  try {
    const candidates = await Candidate.getCandidates();
    res.json(candidates);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function addCandidate(req, res) {
  try {
    const { name, party, photo } = req.body;
    let photoData = photo;
    if (req.file) {
      photoData = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }
    const result = await Candidate.addCandidate({ name, party, photo: photoData });
    res.json({ _id: result.insertedId, name, party, photo: photoData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function updateCandidate(req, res) {
  try {
    const { name, party, photo } = req.body;
    let photoData = photo;
    if (req.file) {
      photoData = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
    }
    await Candidate.updateCandidate(req.params.id, { name, party, photo: photoData });
    res.json({ _id: req.params.id, name, party, photo: photoData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function deleteCandidate(req, res) {
  try {
    await Candidate.deleteCandidate(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
} 