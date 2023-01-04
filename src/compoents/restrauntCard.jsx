import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    width: 80%;
   margin: auto;
   gap: 10px;
   padding: 40px;
   @media screen and (max-width:500px) {
    flex-direction: column;
    
   }

`
const ImageSide = styled.img`
    display: flex;
    height: 100px;
    width: 100px;
border-radius: 10px;
`
const TextPart = styled.div`
display: flex;
flex-direction:column;

    
`
const LargeText = styled.h1`
font:32px Poppins, sans-serif;
font-weight: 1000;
color: #363636;
line-height: 2ch;
margin: 0;
@media screen and (max-width:500px) {
    font-size: 28px;
    
   }
 
`
const Buttons = styled.div`
    display: flex;
    gap: 10px;
    margin: 10px 0;
`
const Button = styled.button`
    display: flex;
    
    border: 1px solid orange;
    border-radius: 5px;
    background-color: white;
    transition: background-color 1s;
    justify-content: center;
    align-items: center;
    color: orange;
    height: 30px;
    width: 100px;
    &:hover{
        background-color:orange;
        
        color: white;
        
    }
    
`
const SmallText = styled.p`
color:#787878;
font:16px Poppins, sans-serif;
line-height: 3ch;
`

const Rating = styled.div`
    display: flex;
`
export const RestrauntCard = () => {
    return (
        <Container>

            <ImageSide src='https://bslthemes.com/html/quickeat/assets/img/logos-1.jpg' />
            <TextPart>
                <LargeText>Kennington Lane Cafe</LargeText>
                <Rating>⭐⭐⭐⭐⭐</Rating>
                <Buttons>
                    <Button>american</Button><Button>chinese</Button><Button>indian</Button>
                </Buttons>
                <SmallText>Non enim praesent elementum facilisis leo vel fringilla. Lectus proin nibh nisl condimentum id. Quis varius quam quisque id diam vel.</SmallText>

            </TextPart>
        </Container>
    )
}
