import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import data from '../DB/data';
import './Grid.css';

function GridList(){

    let [list, setlist] = useState(data);

    return(
        <div className="grid-mypage">
            {
                list.map((a,i)=>{
                    return <Grid list={list[i]} i={i} key={i}/>
                })
            }
        </div>
    )
}

function Grid(props){

    return(
        <div className="card-mypage " key={data.id}>
            <div className="img-mypage">{props.list.title}</div>
            <div className="product-name">{props.list.content}</div>
            <div className="overlay">
                <div className="detail">
                    <span>Detail</span>
                </div>
            </div>
        </div>
            )

    
}


export default GridList;