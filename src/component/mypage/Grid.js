import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import data from './data';
import './Grid.css';

function GridDetail (){

    let [grid, set변경] = useState(data);

    return(
        <div className="grid-container">
            {
                grid.map((a,i)=>{
                    return <Grid grid={grid[i]} i={i} key={i}/>
                })
            }
        </div>

    )
}

function Grid(props){
    return(
        <div className="grid-main">
            <div className="card">
                <div className="grid-info">
                    <h4 className="grid-title">{props.grid.title}</h4>

                </div>
            </div>
        </div>
    )
}


export default GridDetail;