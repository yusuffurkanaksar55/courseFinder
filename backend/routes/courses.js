const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/search', async (req, res) => {
    const query = req.query.q;
    try {
        // Udemy API'si ile bir istek gönderiliyor
        const response = await axios.get(`https://www.udemy.com/api-2.0/courses/?search=${query}`, {
            headers: {
                'Authorization': `Bearer YOUR_ACCESS_TOKEN`
            }
        });
        const courses = response.data.results; // API'den gelen veriler
        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Kurslar alınamadı' });
    }
});

module.exports = router; 