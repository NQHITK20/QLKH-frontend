import Footer from '@/components/footer'
import Header from '@/components/header/header'
import '../../style/profile.css'
import '../../style/checkout.css'
import Image from 'next/image'          
import React from 'react'

export default function Profile() {
  return (
    <div className='profile-container'>
        <Header />
        <div className='profile-banner'>
                    <Image className='profile-banner-image' src='/banner/checkout-banner.jpg' alt='contact' width={1140} height={400}/>
                        <div className='profile-banner-text'>
                            <h1>Thông tin cá nhân</h1>
                        </div>
        </div>
        <div className='profile-content'>
        <form className='checkout-content-left'>
              <label>Họ và tên</label>
              <div className='checkout-form'>
                <input type='text' placeholder='Nhập họ và tên' required/>
              </div>
              <label>Email</label>
              <div className='checkout-form'>
                <input type='email' placeholder='Nhập email' required/>
              </div>
              <label>Số điện thoại</label>
              <div className='checkout-form'>
                <input type='text' placeholder='Nhập số điện thoại' required/>
              </div>

              <div className='checkout-form'>
                <button>Lưu thay đổi</button>
              </div>
          </form>
        </div>
        <Footer />
    </div>
  )
}
