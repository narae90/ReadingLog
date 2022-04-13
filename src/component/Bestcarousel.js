import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BestData from './DB/BestData';
// import './Bestcarousel.css';
import styled from "styled-components";


// 도서 투표 중에 좋아요(heart)를 많이 받은 8개 도서 보여주기


// 반복문
// 슬라이더
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
      
      <StyledSlider {...settings}>
            {
              best.map((a,i)=>{
                return <Carousel best={best[i]} i={i} key={i}/>
              })
            }

      </StyledSlider>
    )
}


// 반복문 내용
function Carousel(props) {

  let [하트, 하트변경] = useState(0);

  return(
    <BestCarousel>
      <CarouselImage>
      <img src={ props.best.img } 
            width="100%" height="100%"/>
      </CarouselImage>
      <CarouselContent>
          <div className="carousel-info">
            <CarouselTitle>{ props.best.title }</CarouselTitle>
            <CarouselWriter>{ props.best.writer }</CarouselWriter>
        </div>
        <div className="carousel-heart">
        <span onClick={ ()=>{ 하트변경(하트+1); } }>❤️</span> {하트}
        </div>
      </CarouselContent>   
      </BestCarousel>
  );
  
}


export default Bestcarousel;



// styled-components 

const StyledSlider = styled(Slider)`
    .slick-slide {
      padding: 10px;
      
      @media (min-width: 1801px) and (max-width: 2649px) {
        padding: 10px;
      }
    } 
    
    .slick-slider{
      height: 450px;

      @media (min-width: 1801px) and (max-width: 2649px) {
        height: 570px;
        
      }
    } 


`

const BestCarousel = styled.a`
		border-radius: 0.25rem;
    text-decoration: none;
    font-weight: 400;
    transition: 0.15s ease;
    overflow: hidden;
    &:hover{  
      box-shadow: inset 0 0 0 0px rgb(0 0 0 / 15%);
      content: "";
      top: -4px;
      position: relative;
    }
    
    
`

const CarouselImage = styled.div`
    height: 300px;
    border-radius: 0.25rem 0.25rem 0 0;
    overflow: hidden;

    @media (min-width: 1801px) and (max-width: 2649px) {
      height: 400px;
      width: 455px;

    }

`

const CarouselContent = styled.div `
    padding: 1rem;
    border-left: 1px solid #dedede;
    border-right: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    border-radius: 0 0 0.25rem 0.25rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.15s ease;
    background-color: #FFF;
    text-align: center;

    @media (min-width: 1801px) and (max-width: 2649px) {
      width: 455px;
    }

`

const CarouselTitle = styled.h2 `
    padding: 3px;
    padding-top: 10px;
    padding-left: 15px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;

`

const CarouselWriter = styled.p`
    font-size: 14px;
    padding: 3px;
    font-weight: 600;
    padding-left: 15px;
    text-align: left;
`