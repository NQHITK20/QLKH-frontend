'use client';
import React, { useState } from 'react';
import '../../style/course-learning.css';

export default function CourseLearning() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLesson = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='course-learning-container'>
      <aside className="sidebar">
        <div className="section">
          <div className="section-title" onClick={toggleLesson}>
            Introduction
          </div>
          {isOpen && (
            <ul className="lessons">
              <li>Bài 1</li>
              <li>Bài 2</li>
            </ul>
          )}
        </div>
      </aside>

      <main className="main-content">
        <h1>Chào mừng bạn đến với khóa học!</h1>
      </main>
    </div>
  );
}