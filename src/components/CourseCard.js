import React from 'react';

function CourseCard({ course }) {
    return (
        <div className="course-card">
            <h3>{course.title}</h3>
            <p>Eğitmen: {course.instructor}</p>
            <p>Fiyat: {course.price}</p>
            <a href={course.link} target="_blank" rel="noopener noreferrer">Detaylar</a>
        </div>
    );
}

export default CourseCard; 