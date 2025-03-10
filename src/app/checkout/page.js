import React from 'react'
import '../../style/checkout.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function Checkout() {
  return (
    <div className='checkout-container'>
        <Header />
        <div className='checkout-banner'>
            <Image className='checkout-banner-image' src='/banner/checkout-banner.jpg' alt='contact' width={1140} height={400}/>
                <div className='checkout-banner-text'>
                    <h1>Thanh toán</h1>
                </div>
        </div>
        <div className='checkout-content'>
          <form className='checkout-content-left'>
              <h2>Thông tin thanh toán</h2>
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
              <label>Ghi chú</label>
              <div className='checkout-form'>
                <textarea placeholder='Nhập ghi chú'></textarea>
              </div>
            <div className='checkout-coupon'>
              <h2>Nhập mã giảm giá</h2>
              <div className='checkout-form'>
                <input type='text' placeholder='Nhập mã giảm giá'/>
                <button>Áp dụng</button>
              </div>
            </div>
          </form>
          <form className='checkout-content-right'>
            <h2>Đơn hàng</h2>
            <div className='checkout-product-container'>
              <div className='checkout-product-name'>
              Khóa học lập trình ReactJS cao cấp
              </div>
              <div className='checkout-product-price'>
              1,500,000 vnđ
              </div>
            </div>
            <div className='checkout-product-container'>
              <div className='checkout-product-name'>
              Khóa học lập trình ReactJS cao cấp
              </div>
              <div className='checkout-product-price'>
              1,500,000 vnđ
              </div>
            </div>
            <div className='checkout-product-container'>
              <div className='checkout-product-name'>
              Khóa học lập trình ReactJS cao cấp
              </div>
              <div className='checkout-product-price'>
              1,500,000 vnđ
              </div>
            </div>
            <div className='checkout-total'>
             <div className='checkout-product-total-name'>
              Tổng cộng
              </div>
              <div className='checkout-product-total-price'>
              4,500,000 vnđ
              </div>
            </div>
            <div className='checkout-payment'>
              <h3>Phương thức thanh toán</h3>
              <div className='checkout-payment-method'>
                <input type='radio' id='payment-method' name='payment-method' value='payment-method'/>
                <label for='payment-method'>Thanh toán qua Paypal</label>
              </div>
              <div className='checkout-payment-method'>
                <input type='radio' id='payment-method' name='payment-method' value='payment-method'/>
                <label for='payment-method'>Thanh toán qua VnPay</label>
              </div>
            </div>
            <button className='checkout-button'>Đặt hàng</button>
          </form>
        </div>
        <Footer />
    </div>
  )
}
