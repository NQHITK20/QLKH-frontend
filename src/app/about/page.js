import Comment from '@/components/comment'
import Footer from '@/components/footer'
import Header from '@/components/header/header'
import React from 'react'
import '../../style/about.css'
import Image from 'next/image'

export default function About() {
  return (
    <div className='about-container'>
        <Header />
        <div className='about-content'>
            <div className='about-banner'>
                <Image className='about-banner-image' src='/banner/about-banner.jpg' alt='about' width={1140} height={400}/>
                <div className='about-banner-text'>
                    <h1>Về chúng tôi</h1>
                </div>
            </div>
            <div className='about-introduce'>
                <div className='about-introduce-image-container'>
                    <Image className='about-introduce-image' src='/about/about-1.jpg' alt='about' width={345} height={430}/>
                    <Image className='about-introduce-image' src='/about/about-2.jpg' alt='about' width={345} height={430}/>
                    <Image className='about-introduce-image' src='/about/about-3.jpg' alt='about' width={345} height={430}/>
                </div>
                <div className='about-introduce-text'>
                    <h1>Khám phá câu chuyện của chúng tôi</h1>
                    <p>Chúng tôi mang đến nền tảng học tập chất lượng, giúp bạn phát triển kỹ năng mọi lúc, mọi nơi. Với đội ngũ giảng viên giàu kinh nghiệm và khóa học đa dạng, chúng tôi cam kết đồng hành cùng bạn trên hành trình chinh phục tri thức và thành công</p>
                </div>
            </div>     
        </div>
        <Comment />
        <Footer />
    </div>
  )
}
