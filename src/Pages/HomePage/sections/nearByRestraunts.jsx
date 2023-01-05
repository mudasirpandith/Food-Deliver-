import React from 'react'
import styled from 'styled-components';
import { RestrauntCard } from '../../../compoents/restrauntCard';
const Wrapper = styled.div`
    display: flex;
    margin:50px 10px 100px 10px ;
    flex-direction: column;
`
const Container = styled.div`
    display: flex;
    
    
    @media screen  and  (max-width:600px){
        flex-direction: column;
        
    }
    
`
const Grid = styled.div`   
display:flex;

gap: 50px;
@media screen  and  (max-width:600px){
        flex-direction: column;
        gap: 60px;
    }

`
const GridItem1 = styled.div`
display:flex;
flex: 4;
flex-direction: column;
gap: 2px;


`
const GridItem2 = styled.div`
display:flex;
flex:4;
flex-direction: column;
gap: 2px;
`
const LargeText = styled.h1`
font:42px Poppins, sans-serif;
font-weight: 1000;
color: #363636;
line-height: 2ch;
margin: 10px 0;

 
`
const SmallText = styled.p`
color:#787878;
font:16px Poppins, sans-serif;
line-height: 3ch;

`
const Button = styled.button`
   
    border: 2px solid orange;
    border-radius: 10px;
    color: orange;
    background-color: white;
    transition: background-color 1s;
    font-weight: 500;
    height: 50px;
    width: 120px;
    padding: 10px;
    margin: auto;
    &:hover{
        background-color:orange;
        
        color: white;
    }
    
`
export const NearByRestraunts = () => {


    return (
        <Wrapper>


            <Container>
                <Grid>
                    <GridItem1>
                        <LargeText>
                            12 Best Restaurants  in<br /> Your City
                        </LargeText>
                        <SmallText>Magna sit amet purus gravida quis blandit turpis cursus. Venenatis tellus in metus vulputate</SmallText>
                        <RestrauntCard />
                    </GridItem1>
                    <GridItem2>
                        <RestrauntCard /><RestrauntCard />
                    </GridItem2>
                </Grid>

            </Container>
            <Button>SEE ALL <span style={{ fontSize: "20px", fontWeight: "700" }}>&rarr;</span> </Button>
        </Wrapper>
    )
}
