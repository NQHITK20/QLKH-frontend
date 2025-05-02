import React from 'react'
import '../../style/cart.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import Link from 'next/link'

export default function Cart() {
  return (
    <div className='cart-container'>
        <Header />
         <div className='cart-banner'>
            <Image className='cart-banner-image' src='/banner/cart-banner.jpg' alt='about' width={1140} height={400}/>
                <div className='cart-banner-text'>
                    <h1>Giỏ hàng</h1>
                </div>
        </div> 
        <div className='cart-content'>
            <div className='cart-content-left'>
                <table className='cart-table'>
                    <thead>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên khoá học</th>
                            <th>Giá</th>
                            <th>Xoá</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Image src='/course/course-1.jpg' alt='course-1' width={300} height={180}/></td>
                            <td>Khoá học frontend Reactjs cao cấp</td>
                            <td>1.500.000đ</td>
                            <td><button>Xoá</button></td>
                        </tr>
                        <tr>
                            <td><Image src='/course/course-1.jpg' alt='course-1' width={300} height={180}/></td>
                            <td>Khoá học frontend Reactjs cao cấp</td>
                            <td>1.500.000đ</td>
                            <td><button>Xoá</button></td>
                        </tr>
                        <tr>
                            <td><Image src='/course/course-1.jpg' alt='course-1' width={300} height={180}/></td>
                            <td>Khoá học frontend Reactjs cao cấp</td>
                            <td>1.500.000đ</td>
                            <td><button>Xoá</button></td>
                        </tr>
                    </tbody>
                </table>                
            </div>
            <div className='cart-content-right'>
                <div className='cart-content-right-total'>
                    <h3>Tổng cộng:</h3>
                    <h3>4.500.000đ</h3>
                </div>
                <Link className='cart-content-right-button' href='/checkout'>
                    Thanh toán
                </Link>
            </div>
        </div>
        <Footer />
    </div>
  )
}
