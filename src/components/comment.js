import React from 'react'
import '../style/comment.css'
import Carousel from "react-multi-carousel";
import "../../node_modules/react-multi-carousel/lib/styles.css";
import Image from 'next/image';


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
export default function Comment() {
  return (
    <div className='comment-container'>
        <div className='comment-header'>
            <h1>Học viên nói gì về chúng tôi</h1>
        </div>
        <Carousel
        className='comment-carousel-container'
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Khoá học rất hay, giảng viên nhiệt tình, hỗ trợ nhiệt tình. Mình đã học được rất nhiều điều mới và bổ ích”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-1.jpeg' alt='avatar-1' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Thị Hồng</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Bài giảng chi tiết, có ví dụ minh họa rõ ràng. Lộ trình học hợp lý, giúp nắm vững kiến thức nhanh chóng. Rất hài lòng về khóa học”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-2.jpeg' alt='avatar-2' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Trần Văn Thành</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Giảng viên tận tâm, nhiệt tình giải đáp thắc mắc. Học viên có thể tương tác trực tiếp, nâng cao hiệu quả tiếp thu”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-3.jpeg' alt='avatar-3' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Văn Sáng</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Khoá học rất hữu ích, nội dung dễ hiểu, giảng viên tận tâm. Kiến thức thực tế, áp dụng ngay vào công việc. Rất đáng để học”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-4.jpg' alt='avatar-4' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Trần Văn Men</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Khoá học rất hay, giảng viên nhiệt tình, hỗ trợ nhiệt tình. Mình đã học được rất nhiều điều mới và bổ ích”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-5.jpg' alt='avatar-5' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Đặng Thành Nam</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Khóa học cung cấp nhiều kiến thức giá trị, thực hành sát với thực tế. Giảng viên hướng dẫn tận tình, giúp tiếp thu dễ dàng. Rất đáng để trải nghiệm”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-6.jpg' alt='avatar-6' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Tiến Dũng</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Khoá học rất hay, giảng viên nhiệt tình, hỗ trợ nhiệt tình. Mình đã học được rất nhiều điều mới và bổ ích”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-7.jpg' alt='avatar-7' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Tôn Thất Bảo Hoàng</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“ Khoá học mang lại nhiều kinh nghiệm thực tiễn, dễ dàng áp dụng vào công việc. Phù hợp cho cả người mới và người có kinh nghiệm”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-8.jpg' alt='avatar-8' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Thế Hoàng</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Chất lượng giảng dạy tuyệt vời, giáo trình bài bản, nội dung cập nhật. Học xong có thể tự tin áp dụng vào thực tế ngay lập tức”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-9.jpg' alt='avatar-9' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Thái An</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Phương pháp giảng dạy khoa học, dễ hiểu, nhiều bài tập thực hành giúp ghi nhớ nhanh. Một khóa học rất đáng giá”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-10.jpg' alt='avatar-10' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Thái Dương</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Giảng viên tận tâm, nhiệt tình giải đáp thắc mắc. Học viên có thể tương tác trực tiếp, nâng cao hiệu quả tiếp thu”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-11.jpg' alt='avatar-1' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Lê Thị Hà Như</h3>
      </div>
    </div>
  </div>
  <div className='comment-carousel'>
    <div className='comment-carousel-text'>
      <p>“Khoá học giúp mở rộng tư duy, nâng cao kỹ năng chuyên môn. Mọi thứ được trình bày rõ ràng, dễ hiểu. Hoàn toàn hài lòng”</p>
    </div>
    <div className='comment-carousel-avatar'>
      <div className='comment-carousel-avatar-image'>
        <Image src='/comment/avatar-12.jpg' alt='avatar-12' width={90} height={90} style={{borderRadius:50}}/>
      </div>
      <div className='comment-carousel-avatar-name'>
        <h3>Nguyễn Thị Hồng</h3>
      </div>
    </div>
  </div>
</Carousel>;
   </div>
  )
}
