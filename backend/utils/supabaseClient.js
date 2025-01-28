import { createClient } from '@supabase/supabase-js';

// Supabase URL ve Anahtarınızı buraya girin
const supabaseUrl = 'https://vjefxoznnqcxdampfxvg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZWZ4b3pubnFjeGRhbXBmeHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgwODk3MzgsImV4cCI6MjA1MzY2NTczOH0.Bf8rq8nk5Oq8Xh-nQILYJDhiju9XXu5RD6O2LkobjT0';

// Supabase istemcisini oluşturun
const supabase = createClient(supabaseUrl, supabaseKey);

/*
// Örnek bir sorgu
export async function fetchData() {
  const { data, error } = await supabase
    .from('your_table_name') // Tablo adınızı buraya girin
    .select('*');

  if (error) {
    console.error('Hata:', error);
  } else {
    console.log('Veri:', data);
  }
}
*/