import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    margin-top: 100px;
    flex-direction: column;
    @media screen and (max-width:500px) {
       
        margin-top: 200px; 
    }
`
const LargeText = styled.h1`
font:42px Poppins, sans-serif;
font-weight: 1000;
color: #363636;
line-height: 2ch;
margin: 0;
text-align: center;
 
`
const SmallText = styled.p`
color:#787878;
font:16px Poppins, sans-serif;
line-height: 3ch;
text-align: center;
margin: 0 0 20px 0;
`

const Grid = styled.div`
display: flex;
justify-content: space-between;
margin: 0 20px;
@media screen and (max-width:500px) {
    flex-direction: column;
    gap: 30px;
      
  }
`
const GridItem = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const Image = styled.img`
width: 300px;
margin: 0;
@media screen and (max-width:500px) {
     width: 300px;
      
  }
  
`
const Steps = styled.h4`
font:24px Poppins, sans-serif;
font-weight: bold;
color: #363636;
padding: 25px 0 0 0;
margin: 0;

`
const Span = styled.span`
 font:34px Poppins, sans-serif;
 font-weight: bold;
 color: #9b9a9a;
`
export const HowItWorks = () => {
    return (
        <Container>
            <LargeText>
                How It Works
            </LargeText>
            <SmallText>
                Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in
                metus vulputate eu scelerisque felis.
            </SmallText>
            <Grid>
                <GridItem>
                    <Image loading='lazy' src='https://bslthemes.com/html/quickeat/assets/img/illustration-1.png' />
                    <Steps>
                        <Span>01</Span> Select Restaurant
                    </Steps>
                    <SmallText>
                        Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in
                        metus vulputate eu scelerisque felis.
                    </SmallText>
                </GridItem>
                <GridItem>
                    <Image loading='lazy' src='https://bslthemes.com/html/quickeat/assets/img/illustration-2.png' />
                    <Steps>
                        <Span>02</Span> Select menu
                    </Steps>
                    <SmallText>
                        Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in
                        metus vulputate eu scelerisque felis.
                    </SmallText>
                </GridItem>
                <GridItem>
                    <Image loading='lazy' src='https://bslthemes.com/html/quickeat/assets/img/illustration-3.png' />
                    <Steps>
                        <Span>03</Span> Wait for delivery
                    </Steps>
                    <SmallText>
                        Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in
                        metus vulputate eu scelerisque felis.
                    </SmallText>
                </GridItem>
            </Grid>
        </Container>
    )
}
