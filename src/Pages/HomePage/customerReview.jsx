import React from 'react'
import styled from 'styled-components';
import { ReviewCard } from '../../compoents/ReviewCard';
const Container = styled.div`
    display: flex;
    background-color: #f7f7f7;
    margin: 0 10px;
    @media screen and (max-width:500px) {
       flex-direction: column;
       gap: 40px;
        
    }
`
const Grid1 = styled.div`
    display: flex;
    flex-direction:column ;
    padding-top: 50px;
    flex: 4;
    
`
const Grid2 = styled.div`
    display: flex;
    flex: 4;
`

const LargeText = styled.h2`
font:48px Poppins, sans-serif;
font-weight: 1000;

color: #363636;
line-height: 2ch;
margin: 0;
@media screen and (max-width:1200px) {
    font-size: 38px;
    
   }

 
`
const Image = styled.img`
display: flex;
  @media screen and (max-width:500px) {
       width: 100%;
        
    }
    
`


export const CustomerReview = () => {
    return (
        <Container>

            <Grid1>
                <LargeText>What customers say  <br /> about us</LargeText>
                <ReviewCard />
            </Grid1>
            <Grid2>

                <Image src='https://bslthemes.com/html/quickeat/assets/img/photo-4.png' />
            </Grid2>
        </Container>
    )
}
