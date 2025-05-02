'use client'
import React from 'react'
import '../style/course.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Course() {
  return (
    <div className='course-container'>
        <div className='course-header'>
            <div className='course-header-text'>
                <h1>Khám phá khoá học</h1>
            </div>
            <Link className='course-header-button' href='/course'>
                Xem thêm
            </Link>
        </div>
        <div className='course-list'>
          <div className='course-item'>
              <div className='course-item-image'>
                <Image src='/course/course-1.jpg' alt='course-1' width={488} height={325} style={{borderRadius:10}}/>
              </div>
              <div className='course-item-content'>
                <h2>Khoá học frontend Reactjs cao cấp</h2>
                <h3>1.500.000 đ</h3>
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
                <h3>1.500.000 đ</h3>
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
                <h3>1.500.000 đ</h3>
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
                <h3>1.500.000 đ</h3>
              </div>
              <Link className='course-item-button' href='/coursedetail'>
                Xem chi tiết
              </Link>
          </div>
        </div>
    </div>
  )
}
