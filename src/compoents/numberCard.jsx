import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    flex: 2;
    gap: 20px;
    width: 100px;
    height: 100px;
    background-color: white;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    padding: 20px;
    @media screen  and (max-width:500px){
       width: 90%;
     }
`
const LargeText = styled.h1`

font:42px Poppins, sans-serif;
font-weight: 1000;
color: orange;
line-height: 2ch;
margin: 0;
@media screen and (max-width:500px) {
    font-size: 38px;
    
   }
`
const SmallText = styled.p`
color:#787878;
font:20px Poppins, sans-serif;
line-height: 3ch;
margin-bottom: 40px;
`

export const NumberCard = (props) => {
    return (
        <Container>
            <LargeText>{props.number}</LargeText>
            <SmallText>{props.name[0]} <br /> {props.name[1]}</SmallText>
        </Container>
    )
}
