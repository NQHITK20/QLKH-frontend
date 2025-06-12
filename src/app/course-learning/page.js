'use client'
import React, { useState } from 'react';
import '../../style/course-learning.css';

export default function CourseLearning() {
  const [openSectionIndex, setOpenSectionIndex] = useState(null);

  const toggleLesson = (index) => {
    setOpenSectionIndex(prevIndex => (prevIndex === index ? null : index));
  };

  const sections = [
    "Introduction to Web Development",
    "Building Your First Web Page",
    "JavaScript Basics",
    "JavaScript DOM Manipulation",
    "Advanced JavaScript: ES6+",
    "React Basics",
    "Full-Stack Development with Node.js",
  ];

  return (
    <div className="course-learning-container">
  <aside className="sidebar">
    
    <div className="section">
      <div className="section-title" onClick={() => toggleLesson(0)}>
        Introduction to Web Development
        <span className="arrow">{openSectionIndex === 0 ? '▼' : '▶'}</span>
      </div>
      {openSectionIndex === 0 && (
        <div className="lessons">
          <div className="lesson-item">Bài 1</div>
          <div className="lesson-item">Bài 2</div>
        </div>
      )}
    </div>

    <div className="section">
      <div className="section-title" onClick={() => toggleLesson(1)}>
        Building Your First Web Page
        <span className="arrow">{openSectionIndex === 1 ? '▼' : '▶'}</span>
      </div>
      {openSectionIndex === 1 && (
        <div className="lessons">
          <div className="lesson-item">Bài 1</div>
          <div className="lesson-item">Bài 2</div>
        </div>
      )}
    </div>

    <div className="section">
      <div className="section-title" onClick={() => toggleLesson(2)}>
        JavaScript Basics
        <span className="arrow">{openSectionIndex === 2 ? '▼' : '▶'}</span>
      </div>
      {openSectionIndex === 2 && (
        <div className="lessons">
          <div className="lesson-item">Bài 1</div>
          <div className="lesson-item">Bài 2</div>
        </div>
      )}
    </div>

    <div className="section">
      <div className="section-title" onClick={() => toggleLesson(3)}>
        JavaScript DOM Manipulation
        <span className="arrow">{openSectionIndex === 3 ? '▼' : '▶'}</span>
      </div>
      {openSectionIndex === 3 && (
        <div className="lessons">
          <div className="lesson-item">Bài 1</div>
          <div className="lesson-item">Bài 2</div>
        </div>
      )}
    </div>

    <div className="section">
      <div className="section-title" onClick={() => toggleLesson(4)}>
        Advanced JavaScript: ES6+
        <span className="arrow">{openSectionIndex === 4 ? '▼' : '▶'}</span>
      </div>
      {openSectionIndex === 4 && (
        <div className="lessons">
          <div className="lesson-item">Bài 1</div>
          <div className="lesson-item">Bài 2</div>
        </div>
      )}
    </div>

    <div className="section">
      <div className="section-title" onClick={() => toggleLesson(5)}>
        React Basics
        <span className="arrow">{openSectionIndex === 5 ? '▼' : '▶'}</span>
      </div>
      {openSectionIndex === 5 && (
        <div className="lessons">
          <div className="lesson-item">Bài 1</div>
          <div className="lesson-item">Bài 2</div>
        </div>
      )}
    </div>

    <div className="section">
      <div className="section-title" onClick={() => toggleLesson(6)}>
        Full-Stack Development with Node.js
        <span className="arrow">{openSectionIndex === 6 ? '▼' : '▶'}</span>
      </div>
      {openSectionIndex === 6 && (
        <div className="lessons">
          <div className="lesson-item">Bài 1</div>
          <div className="lesson-item">Bài 2</div>
        </div>
      )}
    </div>

  </aside>

  <main className="main-content">
    <div className="lesson-video-wrapper">
      <iframe
        className="lesson-video"
        src="https://www.youtube.com/embed/dD2EISBDjWM"
        title="YouTube video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="lesson-description">
      <h2>Giới thiệu bài học</h2>
      <p>
        Trong bài học đầu tiên này, bạn sẽ được làm quen với khái niệm phát triển web,
        bao gồm cách hoạt động của HTML, CSS và JavaScript để tạo ra một trang web hoàn chỉnh.
        Hãy chắc chắn rằng bạn đã chuẩn bị môi trường lập trình cơ bản như trình duyệt và trình soạn thảo mã nguồn.
      </p>
     
    </div>
  </main>
    </div>
  );
}
