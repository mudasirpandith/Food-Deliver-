import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
display: flex;
background: rgb(248,225,183);
background: linear-gradient(274deg, rgba(248,225,183,1) 0%, rgba(228,250,216,1) 17%, rgba(229,211,207,1) 41%, rgba(246,242,241,1) 83%, rgba(240,238,237,0.9897681484703257) 100%);


`
const Grid = styled.div`
margin: 0 20px;
display:flex;
@media screen and (max-width:500px) {
    flex-direction: column;
    
   }


`
const GridItem1 = styled.div`
display: flex;
flex: 4;
`
const GridItem2 = styled.div`
display:flex;
flex-direction: column;
flex: 4;
justify-content: center;

`
const Image = styled.img`
    display: flex;
    width: 500px;
    @media screen and (max-width:500px) {
    width:300px;
    
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
`

const Button = styled.button`
    display: flex;
    
    border: 0;
    border-radius: 10px;
    background-color: orange;
    transition: background-color 1s;
    justify-content: center;
    align-items: center;
    padding: 10px ;
    color: white;
    height: 50px;
    width: 120px;
   
    &:hover{
        background-color:white;
        border: 1px solid orange;
        color: orange;
        
    }

`
export const FavouriteFood = () => {
    return (
        <Container>
            <Grid>
                <GridItem1>
                    <Image src='https://bslthemes.com/html/quickeat/assets/img/photo-3.png' />
                </GridItem1>
                <GridItem2>
                    <LargeText>Food from your <br /> favorite restaurants <br /> to your table</LargeText>
                    <SmallText>Pretium lectus quam id leo in vitae turpis massa sed. Lorem donec massa sapien faucibus et molestie. Vitae elementum curabitur vitae nunc.</SmallText>
                    <Button>ORDER NOW</Button>
                </GridItem2>
            </Grid>


        </Container>
    )
}
