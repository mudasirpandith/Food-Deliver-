import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
display: flex;
background: rgb(249,216,213);
background: linear-gradient(274deg, rgba(249,216,213,1) 0%, rgba(245,224,224,1) 17%, rgba(229,211,207,1) 41%, rgba(246,242,241,1) 83%, rgba(240,238,237,0.9897681484703257) 100%);
padding-bottom:30px ;
margin-bottom: -50px;
`
const Grid = styled.div`
margin: 0 20px;
display:flex;
gap: 30px;
@media screen and (max-width:1200px) {
    flex-direction: column;
    gap: 10px;
   }


`
const GridItem1 = styled.div`
display: flex;
flex: 4;
justify-content: center;
@media screen and (max-width:1200px) {
    flex-direction: column;
    
   }
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
    @media screen and (max-width:1200px) {
    width:300px;
    margin: auto;
    
   }
`
const LargeText = styled.h1`
font:42px Poppins, sans-serif;
font-weight: 1000;
color: #363636;
line-height: 2ch;
margin: 0;
@media screen and (max-width:1200px) {
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
    font-weight: 550;
    padding: 10px ;
    color: white;
    height: 60px;
    width: 130px;
   
    &:hover{
        background-color:white;
        border: 1px solid orange;
        color: orange;
        
    }

`
const Icons = styled.div`
display:flex;
flex-direction:column;
gap: 10px;
margin: 0;


@media screen and (max-width:1200px) {
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: -90px;
  gap: 10px;
   }
`
const Icon = styled.p`
    display: flex;
    color:#313131;
   font:16px Poppins, sans-serif;
@media screen and (max-width:1200px) {
margin: 0;

  background-color: white;
  width: 120px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  font-weight: 500;
  padding: 10px 5px;
   }
`
export const FavouriteFood = () => {
    return (
        <Container>
            <Grid>
                <GridItem1>
                    <Image src='https://bslthemes.com/html/quickeat/assets/img/photo-3.png' />
                    <Icons>
                        <Icon>
                            🍔 Burgers
                        </Icon>
                        <Icon>
                            🍗 Chicken
                        </Icon>
                        <Icon>
                            🍕 Pizza
                        </Icon>
                    </Icons>
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
