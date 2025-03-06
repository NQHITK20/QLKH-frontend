'use client';
import Image from 'next/image';
import Course from '@/components/course';
import Comment from '@/components/comment';
import '../../style/home.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer';
import Blog from '@/components/blog';
export default function Home() {
  return (
   <div className="home-container">
    <Header />
    <div className='home-banner'>
      <div className='banner-image'>
        <Image src='/banner/home-banner.jpeg' alt='banner' className='image-style' fill />
      </div>
      <div className='banner-content'>
      <Image src='/banner/banner-trophy.png' alt='trophy' width={80} height={80} />
      <div className='banner-main-text'>
        <h1>Chạm đến ước mơ</h1>
        <h1>Kiến tạo tương lai</h1>
        <p>Chúng tôi mang đến cơ hội để bạn phát triển, học hỏi và vươn xa. Với chất lượng hàng đầu và sự tận tâm, chúng tôi luôn đồng hành cùng bạn trên hành trình chinh phục thành công. Bắt đầu ngay hôm nay để kiến tạo tương lai</p>
      </div>
      </div>
    </div>
    < Course />
    <Comment />
    <Blog />
    <Footer />
   </div>
  );
}