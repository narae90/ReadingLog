import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './Mypage.css';




function Mypage () {
    function show(){
        console.log("Hello");
        
    }
    
    return(
        <div>
            <h1>마이페이지</h1>
            <button onClick={show}>Show</button>
        </div>
    )

}




export default Mypage;