import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

import BestData from './BestData';

// 좋아요(heart)버튼 추가하기 
// 좋아요 많은순으로 정렬?

function Detail(){

    let history = useHistory();
    let [best, best변경] = useState(BestData);

    return(
        <div className="responsive-container">
		<div className="grid">
                {
                    best.map((a,i)=>{
                        return <Best best={best[i]} i={i} key={i}/>
                    })
                }

			</div>
		</div>
    )
}

function Best(props){
    return(

        <a className="product">
            <div className="product-image">
                <img src={ props.best.img } 
                    width="100%" height="100%"/>
            </div>
                <div className="product-content">
                    <div className="product-info">
                        <h2 className="product-title">{ props.best.title }</h2>
                        <p className="product-price">{ props.best.writer }</p>
                    </div>
                    {/* <button className="product-action">
                    <i className="material-icons-outlined"></i></button> */}
                    {/* 좋아요 기능  만들기 */}
                    <div className="carousel-heart">
                        <p>💚 1,403</p>
                    </div>


                    
                </div>
        </a>

    );
}


export default Detail;