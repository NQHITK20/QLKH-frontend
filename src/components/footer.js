import React from 'react'
import '../style/footer.css'
import Image from 'next/image'
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-main-content'>
        <div className='footer-logo'>
            <Image src='/logo/logo.png' alt='logo' width={150} height={80} />
            <p>Nền tảng bán khóa học chất lượng, học mọi lúc, mọi nơi</p>
        </div>
        <div className='footer-contact-us'>
            <h2>Liên hệ</h2>
            <div className='footer-contact-us-item'>
                <div className='footer-contact-us-item-icon'>
                    <TfiLocationPin/>
                </div>
            <p style={{width:250}}>180 Cao Lỗ, Phường 4, Quận 8, TP.Buôn Ma Thuột</p>
            </div>
            <div className='footer-contact-us-item'>
                <div className='footer-contact-us-item-icon'>
                <FiPhone />
                </div>
            <p>0909 090 090</p>
            </div>
            <div className='footer-contact-us-item'>
                <div className='footer-contact-us-item-icon'>
                <TfiEmail />
                </div>
            <p>anymail@mail.com</p>
            </div>
        </div>
        <div className='footer-quick-link'>
            <h2>Liên kết nhanh</h2>
            <Link href='/home'>Trang chủ</Link>
            <Link href='/course'>Khoá học</Link>
            <Link href='/about'>Về chúng tôi</Link>
            <Link href='/contact'>Liên hệ</Link>
        </div>
        <div className='footer-social'>
            <h2>Kết nối với chúng tôi</h2>
            <div className='footer-social-icon-container'>
            <Link className='footer-social-icon' href='/'>
            <FaFacebook />
            </Link>
            <Link className='footer-social-icon' href='/'>
            <FaTwitter />
            </Link>
            <Link className='footer-social-icon' href='/'>
            <FaYoutube />
            </Link>
            <Link className='footer-social-icon' href='/'>
            <FaInstagramSquare />
            </Link>
            </div>
        </div>
        </div>
        <div className='footer-bottom'>
            <p>© Copyright 2025</p>
        </div>
    </div>
  )
}
