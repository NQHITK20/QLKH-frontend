import React from 'react'
import '../style/comment.css'
import Carousel from "react-multi-carousel";
import "../../node_modules/react-multi-carousel/lib/styles.css";


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
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
//   deviceType={this.props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
>
  <div className='comment-carousel'>Item 1</div>
  <div className='comment-carousel'>Item 2</div>
  <div className='comment-carousel'>Item 3</div>
  <div className='comment-carousel'>Item 4</div>
  <div className='comment-carousel'>Item 5</div>
  <div className='comment-carousel'>Item 6</div>
  <div className='comment-carousel'>Item 7</div>
  <div className='comment-carousel'>Item 7</div>
  <div className='comment-carousel'>Item 7</div>
  <div className='comment-carousel'>Item 8</div>
  <div className='comment-carousel'>Item 8</div>
  <div className='comment-carousel'>Item 8</div>
</Carousel>;
   </div>
  )
}
