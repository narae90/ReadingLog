import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
import BestData from './DB/BestData';


// 좋아요(heart)버튼 추가하기 
// 좋아요 많은순으로 정렬?

function Detail(){

    let history = useHistory();
    let [best, best변경] = useState(BestData);
    

    return(
        <Container>
		<Grid>
                {
                    best.map((a,i)=>{
                        return <Best best={best[i]} i={i} key={i}/>
                    })
                }

			</Grid>
		</Container>
    )
}

function Best(props){

    let [하트, 하트변경] = useState(0);

    return(

        <Product>
            <ProductImage>
                <img src={ props.best.img } 
                    width="100%" height="100%"/>
            </ProductImage>
                <ProductContent>
                    <ProductInfo>
                        <ProductTitle>{ props.best.title }</ProductTitle>
                        <ProductWriter>{ props.best.writer }</ProductWriter>
                    </ProductInfo>
                    {/* <button className="product-action">
                    <i className="material-icons-outlined"></i></button> */}
                    <div className="carousel-heart">
                    <span onClick={ ()=>{ 하트변경(하트+1) } }>❤️</span> { 하트 }
                    </div>


                    
                </ProductContent>
        </Product>

    );
}


export default Detail;




// styled-components

const Container = styled.div`
    margin-top: 20px;
    max-width: 1080px;
    width: 90%;
    margin-left: auto;
    margin-right: auto;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    
    @media all and (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        gap: 1.5rem;
        }
`

const Product = styled.a`
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
const ProductImage = styled.div`
    height: 380px;
    border-radius: 0.25rem 0.25rem 0 0;
    overflow: hidden;

`

const ProductContent = styled.div`
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

`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;

`

const ProductTitle = styled.h2`
    font-size: 18px;
    font-weight: bold;

    text-align: left;

`

const ProductWriter = styled.p`
    margin-top: 0.25rem;    
    text-align: left;
    font-size: 14px;
    font-weight: 600;
`