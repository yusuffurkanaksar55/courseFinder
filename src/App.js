import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import CourseCard from './components/CourseCard';
import axios from 'axios';

function App() {
    const [courses, setCourses] = useState([]);

    const handleSearch = async (query) => {
        try {
            const response = await axios.get(`http://localhost:5000/api/courses/search?q=${query}`);
            setCourses(response.data);
        } catch (error) {
            console.error("Error fetching courses:", error);
        }
    };

    return (
        <div className="App">
            <h1>Kurs Arama ve Karşılaştırma</h1>
            <SearchBar onSearch={handleSearch} />
            <div className="course-list">
                {courses.map(course => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
}

export default App; 