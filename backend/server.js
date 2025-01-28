const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB bağlantı şeması
const courseSchema = new mongoose.Schema({
  title: String,
  instructor: String,
  platform: String,
  price: Number,
  rating: Number,
  url: String,
  imageUrl: String
});

const Course = mongoose.model('Course', courseSchema);

// Arama endpoint'i
app.get('/api/search', async (req, res) => {
  const { query } = req.query;
  try {
    const courses = await Course.find({
      $or: [
        { title: { $regex: query, $options: 'i' } },
        { instructor: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ error: 'Arama sırasında bir hata oluştu' });
  }
}); 