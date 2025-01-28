const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
app.use(cors());
app.use(express.json());

// Supabase bağlantısı
const supabaseUrl = 'https://vjefxoznnqcxdampfxvg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZWZ4b3pubnFjeGRhbXBmeHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwODk3MzgsImV4cCI6MjA1MzY2NTczOH0.Bf8rq8nk5Oq8Xh-nQILYJDhiju9XXu5RD6O2LkobjT0';
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/api/courses/search', async (req, res) => {
    const query = req.query.q;
    try {
        // Supabase'den kursları çek
        const { data: courses, error } = await supabase
            .from('courses')
            .select('*')
            .ilike('title', `%${query}%`);

        if (error) throw error;

        res.json(courses);
    } catch (error) {
        res.status(500).json({ error: 'Kurslar alınamadı' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 