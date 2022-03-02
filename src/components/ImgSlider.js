import React from 'react'
import styled from 'styled-components';
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function ImgSlider() {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  }

  return (
    <Carousel {...settings}>
        <Wrap>
          <img src='/images/slider-badging.jpg' alt='' />
        </Wrap>
        <Wrap>
          <img src='/images/slider-badag.jpg' alt='' />
        </Wrap>
    </Carousel>
  )
}

export default ImgSlider

const Carousel = styled(Slider)`
  margin-top: 20px;

  .slick-list {
    overflow: visible;
  }

`

const Wrap = styled.div`
  img {
    border-radius: 10px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    
  }

`