// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';

// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const db = req.app.locals.db;

  // Check if user exists
  const existing = await db.collection('users').findOne({ email });
  if (existing) return res.status(400).json({ message: 'Email already exists' });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = new User({ username, email, password: hashedPassword });
  await db.collection('users').insertOne(user);

  res.status(201).json({ message: 'User created' });
});

// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const db = req.app.locals.db;

  const user = await db.collection('users').findOne({ email });
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  // Create JWT
  const token = jwt.sign({ id: user._id, email: user.email }, JWT_SECRET, { expiresIn: '2h' });

  res.json({ token, user: { id: user._id, username: user.username, email: user.email } });
});

module.exports = router;
