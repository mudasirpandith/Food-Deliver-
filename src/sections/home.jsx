import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
   background: rgb(189,225,228);
   background: linear-gradient(274deg, rgba(189,225,228,1) 0%, rgba(214,250,193,1) 17%, rgba(229,211,207,1) 41%, rgba(249,246,244,1) 100%);
  
   `;

const Grid = styled.div`
    margin:0 10px;
    display: flex;
   
   justify-content: center;
    @media screen and (max-width:500px) {
        flex-direction: column;
        
    }
`
const GridItem1 = styled.div`
    display: flex;
   flex: 4;
    flex-direction: column;
    justify-content: center;
   
   
  
`
const GridItem2 = styled.div`
    display: flex;
    flex: 4;
    flex-direction: column;
    justify-content: center;
   
   
  
`
const Image = styled.img`
  @media screen and (max-width:500px) {
       width: 100%;
        
    }
    
`
const LargeText = styled.h1`

font:42px Poppins, sans-serif;
font-weight: 1000;
color: #363636;
line-height: 2ch;
margin: 0;
@media screen and (max-width:500px) {
    font-size: 38px;
    
   }
`
const SmallText = styled.p`
color:#787878;
font:16px Poppins, sans-serif;
line-height: 3ch;
margin-bottom: 40px;
`
const SelectRes = styled.div`
    display: flex;
  
    @media screen and (max-width:500px) {
        gap: 20px;
        flex-direction: column;
        
    }
`
const SelectResInput = styled.input`
    display:flex;
    flex: 6;
    border: 0;
    height: 50px;
    background-color: white;
    margin: 0 10px;
    color: #212529;
    border-radius: 10px;
    @media screen and (max-width:500px) {
        width: 260px;
        padding: 20px 20px;
        
        
    }
`

const SelectResButton = styled.button`
    display: flex;
    flex: 2;
    border: 0;
    border-radius: 10px;
    background-color: orange;
    transition: background-color 1s;
    justify-content: center;
    align-items: center;
    padding: 10px ;
    color: white;
    height: 50px;
    @media screen and (max-width:500px) {
        width: 150px;
    padding: 20px;
        
    }
    &:hover{
        background-color:white;
        border: 1px solid orange;
        color: orange;
        
    }

`

export const Home = () => {
    return (
        <Container style={{ height: window.innerHeight }}>

            <Grid>

                <GridItem1>
                    <LargeText>The Best <br />
                        Restaurants <br /> In Your Home</LargeText>
                    <SmallText>Lorem ipsum dolor sit, amet consectetur <br /> adipisicing elit. Explicabo exercitationem enim, fugit,culpa fugiat vero  <br /> perspiciatis similique odit error  iure!</SmallText>
                    <SelectRes>
                        <SelectResInput type='text' placeholder='Choose a Restraunt' />
                        <SelectResButton>ORDER NOW</SelectResButton>
                    </SelectRes>

                </GridItem1>
                <GridItem2>
                    <Image src='https://bslthemes.com/html/quickeat/assets/img/photo-1.png' />
                </GridItem2>

            </Grid>
        </Container>
    )
}
