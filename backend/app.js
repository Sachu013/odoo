// backend/app.js (or server.js)

const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');

const app = express();
const PORT = 3000;

const mongoUri = 'mongodb://localhost:27017';
const dbName = 'rewear_db';

let db;

app.use(cors()); // Allow requests from your React frontend
app.use(express.json()); // Parse JSON bodies

async function connectToMongoDB() {
  try {
    const client = new MongoClient(mongoUri);
    await client.connect();
    console.log('Connected to MongoDB');
    db = client.db(dbName);
  } catch (err) {
    console.error('MongoDB connection failed:', err);
    process.exit(1);
  }
}

// Example API endpoint
app.get('/items', async (req, res) => {
  try {
    const items = await db.collection('products').find({}).toArray();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

connectToMongoDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
  });
});
