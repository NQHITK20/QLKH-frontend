import Footer from '@/components/footer'
import Header from '@/components/header/header'
import React from 'react'
import '../../style/contact.css'
import Image from 'next/image'
import { TfiLocationPin } from "react-icons/tfi";
import { FiPhone } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

export default function Contact() {
  return (
    <div className='contact-container'>
      <Header />
       <div className='contact-banner'>
              <Image className='about-banner-image' src='/banner/contact-banner.jpg' alt='contact' width={1140} height={400}/>
              <div className='contact-banner-text'>
                  <h1>Liên hệ</h1>
              </div>
        </div>
      <div className='contact-content'>
        <div className='contact-content-left'>
          <div className='contact-content-left-title'>
            <h1>Liên hệ với chúng tôi</h1>
          </div>
           <div className='contact-us-item'>
              <div className='contact-us-item-icon'>
                <TfiLocationPin/>
              </div>
              <div className='contact-us-item-text'>
                  <h3>Địa chỉ</h3>
                  <p>180 Cao Lỗ, Phường 4, Quận 8, TP.Buôn Ma Thuột</p>
              </div>
           </div>
           <div className='contact-us-item'>
              <div className='contact-us-item-icon'>
                <FiPhone/>
              </div>
              <div className='contact-us-item-text'>
                  <h3>Số điện thoại</h3>
                  <p>0909 090 090</p>
              </div>
           </div>
           <div className='contact-us-item'>
              <div className='contact-us-item-icon'>
                <TfiEmail/>
              </div>
              <div className='contact-us-item-text'>
                  <h3>Email</h3>
                  <p>anymail@mail.com</p>
              </div>
           </div>
        </div>
        <form className='contact-content-right'>
          <div className='contact-form-item'>
              <input id='input-1' className='contact-form-input' type='text' placeholder='Nhập họ và tên'/>
            </div>
            <div className='contact-form-item'>
              <input id='input-2' className='contact-form-input' type='text' placeholder='Nhập email'/>
            </div>
            <div className='contact-form-item'>
              <textarea id='input-3' className='contact-form-input' placeholder='Nhập tin nhắn'/>
            </div>
            <div className='contact-form-button'>
              Gửi
            </div>
        </form>
      </div>
      <Footer />
    </div>
  )
}
