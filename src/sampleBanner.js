import React from "react";
import Slider from "react-slick";
import './sampleBanner.css';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "./img/sample-template/RollingBanner_01.jpg"
import img2 from "./img/sample-template/RollingBanner_02.jpg"
// import img3 from "./img/sample-template/RollingBanner_03.jpg"
import img4 from "./img/sample-template/RollingBanner_04.jpg"
import img5 from "./img/sample-template/RollingBanner_05.jpg"
import img6 from "./img/sample-template/RollingBanner_06.jpg"



export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="sample-header">
          <div className="sample-info">기업들의 템플릿 제작</div>
          <div className="more">MORE ></div>
      </div>
      <div className="slider">
          <Slider {...settings}>
            <div >
              <img src={img1} alt= "img1" className="img-banner"></img>
            </div>
            <div >
              <img src={img2} alt= "img2" className="img-banner"></img>
            </div>
            {/* <div >
              <img src={img3} alt= "img3" className="img-banner"></img>
            </div> */}
            <div >
              <img src={img4} alt= "img4" className="img-banner"></img>
            </div>
            <div >
              <img src={img5} alt= "img5" className="img-banner"></img>
            </div>
            <div  >
              <img src={img6} alt= "img6" className="img-banner"></img>
            </div>
          </Slider>
      </div>
    
    </>
  );
}

  

