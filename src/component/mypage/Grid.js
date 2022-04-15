import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import data from '../DB/data';
// import './Grid.css';
import styled from "styled-components";

const GridPage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 300px;
    padding-right: 300px;

    @media (min-width: 1801px) and (max-width: 2649px) {
        padding-left: 400px;
        padding-right: 400px;
    }
`

const CardPage = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    width: 30%;
    height: 190px;
    margin: 15px 0 30px;
    box-shadow: 0 2px 15px 0px rgba(0, 0, 0, 0.2);
    &:hover {
        opacity: 1;
    }
`

const Overlay = styled.div`
    opacity: 0;
    background: #FF4E50;
    background: -webkit-linear-gradient(90deg, rgba(255, 44, 85, 0.7), rgba(255, 78, 45, 0.7));
    background: linear-gradient(90deg, rgba(255, 44, 85, 0.7), rgba(255, 78, 45, 0.7));
    width: 100%;
    height: 100%;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
    transition: all ease-in-out 200ms;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    &:hover {
        opacity: 1;
    }

` 

const CardImage = styled.div`
    background-color: #f8a79d;
    height: 50%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
`

const CardName = styled.div`
    font-family: "Lato", sans-serif;
    font-weight: bold;
    color: #FF2C55;
    margin-top: 10px;

`

const CardDetail = styled.div`
    span {
        width: 80%;
        height: 20px;
        background-color: transparent;
        padding: 10px 40px;
        border-radius: 50px;
        border: 3px solid white;
        color: white;


`



function GridList(){

    let [list, setlist] = useState(data);

    return(
        <GridPage>
            {
                list.map((a,i)=>{
                    return <Grid list={list[i]} i={i} key={i}/>
                })
            }
        </GridPage>
    )
}

function Grid(props){

    return(
        <CardPage key={data.id}>
            <CardImage>{props.list.title}</CardImage>
            <CardName>{props.list.content}</CardName>
            <Overlay>
                <CardDetail>
                    <span>Detail</span>
                </CardDetail>
            </Overlay>
        </CardPage>
    )

    
}


export default GridList;