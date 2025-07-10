'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2>📚 Book Library</h2>
      <ul>
        <li>Dashboard</li>
        <li>Tài khoản</li>
        <li>Bài viết</li>
        <li>Sách</li>
        <li>Danh mục</li>
        <li>Đơn mượn sách</li>
      </ul>
    </div>
  );
}

