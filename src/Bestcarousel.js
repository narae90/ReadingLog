import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Bestcarousel.css';
 

// 도서 투표 중에 좋아요(heart)를 많이 받은 8개 도서 보여주기




function Bestcarousel(){

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
              <div className="carousel-image">
                  <img src="https://i.pinimg.com/236x/37/6a/97/376a974dee16153f43731681d33d76ee.jpg"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    <h2 className="carousel-title">아름답고 죽은 그녀</h2>
                    <p className="carousel-author">로사 몰리아소</p>
                </div>
                {/* BestBook컴포넌트에서 데이터 가져오기 */}
                <div className="carousel-heart">
                  <p>💚 1,403</p>
                </div>
              </div>
            </a>



            <a className="Best-carousel">
              <div className="carousel-image">
                  <img src="https://i.pinimg.com/236x/a3/53/1d/a3531d966a25eac924655951ffa04dcb.jpg"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    <h2 className="carousel-title">네가 이 별을 떠날 때</h2>
                    <p className="carousel-author">한창훈</p>
                </div>
                <div className="carousel-heart">
                  <p>💚 3,211</p>
                </div>
              </div>
            </a>

          

            <a className="Best-carousel">
              <div className="carousel-image">
                  <img src="https://i2.wp.com/bwithmag.com/wp-content/uploads/2018/04/%E1%84%8E%E1%85%A2%E1%86%A8%E1%84%91%E1%85%AD%E1%84%8C%E1%85%B5.jpg?fit=872%2C1328"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    <h2 className="carousel-title">100세 인생</h2>
                    <p className="carousel-author">린다 그래튼, 앤드루 스콧</p>
                </div>
                <div className="carousel-heart">
                  <p>💚 2,243</p>
                </div>
              </div>
            </a>



            <a className="Best-carousel">
              <div className="carousel-image">
                  <img src="https://t1.daumcdn.net/cfile/tistory/99F11933599F946E29"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    {/* 글씨 넘어가는거 해결하기 */}
                    <h2 className="carousel-title">십년 후에 죽기로 결심한 아빠에게</h2>
                    <p className="carousel-author">윤희일</p>
                </div>
                <div className="carousel-heart">
                  <p>💚 1,532</p>
                </div>
              </div>
            </a>



            <a className="Best-carousel">
              <div className="carousel-image">
                  <img src="https://i.pinimg.com/564x/bf/69/78/bf6978d06ec0087b3f9d2502b25b3cbe.jpg"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    <h2 className="carousel-title">결심만 하는 당신에게</h2>
                    <p className="carousel-author">최명기</p>
                </div>
                <div className="carousel-heart">
                  <p>💚 3,101</p>
                </div>
              </div>
            </a>



            <a className="Best-carousel">
              <div className="carousel-image">
                  <img src="https://static-cse.canva.com/blob/758096/1003w-aPHVg44aKMs.jpg"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    <h2 className="carousel-title">지구 대기 그 너머의 모든 것</h2>
                    <p className="carousel-author">김헌진</p>
                </div>
                <div className="carousel-heart">
                  <p>💚 1,403</p>
                </div>
              </div>
            </a>

            <a className="Best-carousel">
              <div className="carousel-image">
                  <img src="https://i.pinimg.com/originals/d9/94/6c/d9946ccdc9692f854c54dd3d7aa0864d.jpg"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    <h2 className="carousel-title">1교시 철학수업</h2>
                    <p className="carousel-author">뤄후이전</p>
                </div>
                <div className="carousel-heart">
                  <p>💚 1,403</p>
                </div>
              </div>
            </a>

            <a className="Best-carousel">
              <div className="carousel-image">
                  <img src="https://i.pinimg.com/474x/c8/5d/45/c85d45f51f4f8924b434dc866723e7dd.jpg"
                    width="100%" height="100%"/>
              </div>
              <div className="carousel-content">
                  <div className="carousel-info">
                    <h2 className="carousel-title">잃어버린 잠을 찾아서</h2>
                    <p className="carousel-author">마이클 맥거</p>
                </div>
                <div className="carousel-heart">
                  <p>💚 1,403</p>
                </div>
              </div>
            </a>


      </Slider>
    );

}



export default Bestcarousel;