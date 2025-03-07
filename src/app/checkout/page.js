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
        </div>
        <Footer />
    </div>
  )
}
