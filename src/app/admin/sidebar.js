'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import '../../style/sidebar.css'; // Ensure you have this CSS file for styling

export default function Sidebar() {
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (menuName) => {
    setOpenDropdown(openDropdown === menuName ? '' : menuName);
  };

  return (
    <div className="sidebar">
      <h2 className="logo">📚 COURSE</h2>
      <ul className="menu">
        <li>
          <Link href="/admin/dashboard">Dashboard</Link>
        </li>

        <li>
          <button className="dropdown-toggle" onClick={() => toggleDropdown('account')}>
            Tài khoản
          </button>
          {openDropdown === 'account' && (
            <ul className="submenu">
              <li><Link href="/admin/users">Quản lý tài khoản</Link></li>
              <li><Link href="/admin/users/add">Thêm tài khoản</Link></li>
            </ul>
          )}
        </li>

        <li>
          <button className="dropdown-toggle" onClick={() => toggleDropdown('posts')}>
            Bài viết
          </button>
          {openDropdown === 'posts' && (
            <ul className="submenu">
              <li><Link href="/admin/posts">Quản lý bài viết</Link></li>
              <li><Link href="/admin/posts/add">Thêm bài viết</Link></li>
            </ul>
          )}
        </li>

        <li>
          <button className="dropdown-toggle" onClick={() => toggleDropdown('books')}>
            Sách
          </button>
          {openDropdown === 'books' && (
            <ul className="submenu">
              <li><Link href="/admin/books">Quản lý sách</Link></li>
              <li><Link href="/admin/books/add">Thêm sách</Link></li>
            </ul>
          )}
        </li>

        <li>
          <Link href="/admin/categories">Danh mục</Link>
        </li>

        <li>
          <Link href="/admin/borrows">Đơn mượn sách</Link>
        </li>
      </ul>
    </div>
  );
}
