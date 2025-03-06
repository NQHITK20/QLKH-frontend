'use client'
import Comment from '@/components/comment'
import Footer from '@/components/footer'
import Header from '@/components/header/header'
import React from 'react'
import '../../style/about.css'
import Image from 'next/image'
import { useEffect, useState } from "react";
import Blog from '@/components/blog'

export default function About() {
    const Counter = ({ start, end, duration }) => {
        const [count, setCount] = useState(start);
      
        useEffect(() => {
          let startTime = null;
      
          const updateCounter = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
      
            if (progress < 1) {
              requestAnimationFrame(updateCounter);
            }
          };
      
          requestAnimationFrame(updateCounter);
        }, [start, end, duration]);
      
        return <span>{count.toLocaleString()}</span>;
      };
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
                    <div className='about-introduce-text-title'>
                    <h1>Khám phá câu chuyện của chúng tôi</h1>
                    </div>
                    <div className='about-introduce-text-description'>
                    <p>Chúng tôi mang đến nền tảng học tập chất lượng, giúp bạn phát triển kỹ năng mọi lúc, mọi nơi. Với đội ngũ giảng viên giàu kinh nghiệm và khóa học đa dạng, chúng tôi cam kết đồng hành cùng bạn trên hành trình chinh phục tri thức và thành công</p>
                    </div>
                </div>
            </div>
            <div className='about-number'>
                <div className='about-number-item'>
                    <h1><Counter start={0} end={500} duration={2000} />+</h1>
                    <p>khóa học</p>
                </div>
                <div className='about-number-item'>
                    <h1><Counter start={0} end={6000} duration={2000} />+</h1>
                    <p>học viên</p>
                </div>
                <div className='about-number-item'>
                    <h1><Counter start={0} end={24} duration={2000} />/7</h1>
                    <p>hỗ trợ</p> 
                </div>
            </div>    
        </div>
        <div className='about-introduce-content'>
            <div className='about-introduce-content-left'>
                <div className='about-introduce-content-left-top'>
                    <h1>Chúng tôi là ai?</h1>
                    <p>Chúng tôi là một trong những nền tảng học trực tuyến hàng đầu tại Việt Nam, với mục tiêu mang đến cơ hội học tập tốt nhất cho mọi người. Chúng tôi cung cấp hàng ngàn khóa học từ các chuyên gia hàng đầu, giúp bạn phát triển kỹ năng mọi lúc, mọi nơi.</p>
                </div>
                <div className='about-introduce-content-left-bottom'>
                    <div className='about-introduce-content-left-bottom-item'>
                        <h2>Triết lý</h2>
                        <p>Chúng tôi tin rằng mọi người đều có quyền truy cập vào giáo dục chất lượng, không phân biệt tuổi tác, giới tính hay địa lý.</p>
                    </div>
                    <div className='about-introduce-content-left-bottom-item'>
                        <h2>Sứ mệnh</h2>
                        <p>Chúng tôi cam kết đồng hành cùng bạn trên hành trình chinh phục tri thức và thành công.</p>
                    </div>
                </div>
            </div>
            <div className='about-introduce-content-right'>
                <div className='about-introduce-content-right-image-container'>
                <Image className='about-introduce-content-right-image' src='/about/about-4.jpg' alt='about-4' width={220} height={250}/>
                <Image className='about-introduce-content-right-image' src='/about/about-5.jpg' alt='about-5' width={220} height={250}/>
                </div>
                <div className='about-introduce-content-right-youtube-container'>
                    <iframe className='about-introduce-content-right-youtube' width="450" height="250" src="https://www.youtube.com/embed/7e90gBu4pas" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div> 
            </div>
        </div>
        <Comment />
        <Blog   />
        <Footer />
    </div>
  )
}
