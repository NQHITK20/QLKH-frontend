'use client'

import Image from 'next/image'
import '../../style/header.css'
import Link from 'next/link'

export default function Header() {
  return (
    <div className="header-container">
      <Link className="header-logo" href="/">
        <Image src='/logo/logo.png' alt="logo" width={150} height={80} />
      </Link>
      <div className='header-links-container'>
        <Link className='header-link' href="/">Trang chủ</Link>
        <Link className='header-link' href="/about">Về chúng tôi</Link>
        <Link className='header-link' href="/course">Khoá học</Link>
        <Link className='header-link' href="/contact">Liên hệ</Link>
      </div>
      <div className='header-log-container'>
        <Link className='header-login' href="/login">Đăng nhập</Link>
        <Link className='header-sign-up' href="/sign-up">Đăng ký</Link>
      </div>
    </div>
  )
}
