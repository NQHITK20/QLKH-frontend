import Footer from '@/components/footer'
import Header from '@/components/header/header'
import React from 'react'
import Image from 'next/image'
import '../../style/course-list.css'
import Link from 'next/link'
import '../../style/course.css'

export default function BlogList() {
  return (
    <div className='course-list-container'>
        <Header />
        <div className='course-list-banner'>
          <Image className='course-list-image' src='/banner/course-list-banner.jpg' alt='course' width={1140} height={400}/>
            <div className='course-list-text'>
                <h1>Tin tức</h1>
            </div>
        </div>
        <div className='course-list-content'>
        <div className='course-list'>
          <div className='course-item'>
              <div className='course-item-image'>
                <Image src='/course/course-1.jpg' alt='course-1' width={488} height={325} style={{borderRadius:10}}/>
              </div>
              <div className='course-item-content'>
                <h2>Khoá học frontend Reactjs cao cấp</h2>
                <h3>Nguyễn Quang Hoà</h3>
              </div>
              <Link className='course-item-button' href='/coursedetail'>
                Xem chi tiết
              </Link>
          </div>
          <div className='course-item'>
              <div className='course-item-image'>
                <Image src='/course/course-1.jpg' alt='course-1' width={488} height={325} style={{borderRadius:10}}/>
              </div>
              <div className='course-item-content'>
                <h2>Khoá học frontend Reactjs cao cấp</h2>
                <h3>Nguyễn Quang Hoà</h3>
              </div>
              <Link className='course-item-button' href='/course-detail'>
                Xem chi tiết
              </Link>
          </div>
          <div className='course-item'>
              <div className='course-item-image'>
                <Image src='/course/course-1.jpg' alt='course-1' width={488} height={325} style={{borderRadius:10}}/>
              </div>
              <div className='course-item-content'>
                <h2>Khoá học frontend Reactjs cao cấp</h2>
                <h3>Nguyễn Quang Hoà</h3>
              </div>
              <Link className='course-item-button' href='/coursedetail'>
                Xem chi tiết
              </Link>
          </div>
          <div className='course-item'>
              <div className='course-item-image'>
                <Image src='/course/course-1.jpg' alt='course-1' width={488} height={325} style={{borderRadius:10}}/>
              </div>
              <div className='course-item-content'>
                <h2>Khoá học frontend Reactjs cao cấp</h2>
                <h3>Nguyễn Quang Hoà</h3>
              </div>
              <Link className='course-item-button' href='/coursedetail'>
                Xem chi tiết
              </Link>
          </div>
        </div>
        </div>
        <ul className="pagination">
            <li><a href="#">«</a></li>
            <li className="active"><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
            <li><a href="#">»</a></li>
       </ul>
        <Footer />
    </div>
  )
}
