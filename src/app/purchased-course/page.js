import React from 'react'
import '../../style/purchased-course.css'
import '../../style/cart.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import Image from 'next/image'


export default function PurchaseCurse() {
  return (
    <div className='purchased-course-container'>
        <Header/>
        <div className='cart-banner'>
            <Image className='cart-banner-image' src='/banner/cart-banner.jpg' alt='about' width={1140} height={400}/>
                <div className='cart-banner-text'>
                    <h1>Khoá học</h1>
                </div>
        </div> 
        <div className='cart-content'>
            <div className='cart-content-left'>
                <table className='cart-table'>
                    <thead>
                        <tr>
                            <th>Ảnh</th>
                            <th>Tên khoá học</th>
                            <th>Thời lượng</th>
                            <th>Hoàn thành</th>
                            <th>Vào học</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><Image src='/course/course-1.jpg' alt='course-1' width={300} height={180}/></td>
                            <td>Khoá học frontend Reactjs cao cấp</td>
                            <td>24 buổi</td>
                            <td>76%</td>
                            <td><button>Vào học</button></td>
                        </tr>
                        <tr>
                            <td><Image src='/course/course-1.jpg' alt='course-1' width={300} height={180}/></td>
                            <td>Khoá học frontend Reactjs cao cấp</td>
                            <td>24 buổi</td>
                            <td>76%</td>
                            <td><button>Vào học</button></td>
                        </tr>
                        <tr>
                            <td><Image src='/course/course-1.jpg' alt='course-1' width={300} height={180}/></td>
                            <td>Khoá học frontend Reactjs cao cấp</td>
                            <td>24 buổi</td>
                            <td>76%</td>
                            <td><button>Vào học</button></td>
                        </tr>
                        <tr>
                            <td><Image src='/course/course-1.jpg' alt='course-1' width={300} height={180}/></td>
                            <td>Khoá học frontend Reactjs cao cấp</td>
                            <td>24 buổi</td>
                            <td>76%</td>
                            <td><button>Vào học</button></td>
                        </tr>
                    </tbody>
                </table>                
        </div>
        </div>
        <Footer />
    </div>
  )
}
