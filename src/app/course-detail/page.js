'use client'
import React from 'react'
import '../../style/course-detail.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer'
import Image from 'next/image'
import { BsClockHistory } from "react-icons/bs";

export default function CourseDetail() {
  return (
    <div className='course-detail-container'>
        <Header />
        <div className='course-detail-banner'>
            <Image className='course-detail-image' src='/banner/course-list-banner.jpg' alt='course' width={1140} height={400}/>
            <div className='course-detail-text'>
                <h1>Chi tiết khoá học</h1>
            </div>
        </div>
        <div className='course-detail-content'>
            <div className='course-detail-header'>
                <Image className='course-detail-image' src='/course/course-1.jpg' alt='course' width={1140} height={400}/>
                <h1>Khóa học lập trình ReactJS cao cấp</h1>
            </div>
            <div className='course-detail-info'>
                <div className='course-detail-info-left'>
                    <h2>Giới thiệu khóa học</h2>
                    <p>Khóa học ReactJS giúp bạn nắm vững từ cơ bản đến nâng cao về thư viện JavaScript phổ biến nhất hiện nay. Bạn sẽ học cách xây dựng giao diện web hiện đại, tối ưu hiệu suất, quản lý state với Hooks, Context API, và Redux. Khóa học phù hợp cho cả người mới bắt đầu và lập trình viên muốn nâng cao kỹ năng ReactJS. 🚀</p>
                    <h2>Bạn sẽ học được gì khi kết thúc khoá học này:</h2>
                    <p>✅ Hiểu vững ReactJS: Nắm rõ cách hoạt động của React, JSX, Component, Props, và State.</p>
                    <p>✅ Xây dựng giao diện chuyên nghiệp: Tạo UI hiện đại, tối ưu trải nghiệm người dùng.</p>
                    <p>✅ Quản lý state hiệu quả: Sử dụng Hooks, Context API, và Redux để quản lý dữ liệu.</p>
                    <p>✅ Kết nối API: Gọi và xử lý dữ liệu từ REST API hoặc GraphQL.</p>
                    <p>✅ Routing trong React: Điều hướng trang với React Router.</p>
                    <p>✅ Tối ưu hiệu suất: Code sạch, re-render tối ưu, lazy loading.</p>
                    <p>✅ Triển khai ứng dụng: Đưa sản phẩm lên Vercel, Netlify hoặc Firebase Hosting.</p>
                </div>
                <div className='course-detail-info-right'>
                    <div className='course-include'>
                        <div className='course-include-icon'>
                        <BsClockHistory />
                        <label>Thời lượng</label>
                        </div>
                    </div>
                    <div className='course-fee'>
                        <label>Giá khoá học</label>
                        <h3>1,500,000 đ</h3>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
