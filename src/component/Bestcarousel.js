import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestData from './BestData';
import './Bestcarousel.css';
 

// 도서 투표 중에 좋아요(heart)를 많이 받은 8개 도서 보여주기


function Bestcarousel(){

  let [best, best변경] = useState(BestData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
      
      <Slider {...settings}>
        <a className="Best-carousel">
            {
              best.map((a,i)=>{
                return <Carousel best={best[i]} i={i} key={i}/>
              })
            }
        </a>
      </Slider>
    )
}

function Carousel(props) {

  let [하트, 하트변경] = useState(0);

  return(
    <>
    <div className="carousel-image">
    <img src={ props.best.img } 
          width="100%" height="100%"/>
    </div>
    <div className="carousel-content">
        <div className="carousel-info">
          <h2 className="carousel-title">{ props.best.title }</h2>
          <p className="carousel-price">{ props.best.writer }</p>
      </div>
      <div className="carousel-heart">
      <span onClick={ ()=>{ 하트변경(하트+1); } }>❤️</span> {하트}
      </div>
    </div>   
    </>
  );
  
}


export default Bestcarousel;