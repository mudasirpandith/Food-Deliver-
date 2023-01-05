import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
display: flex;
background: rgb(249,216,213);
background: linear-gradient(274deg, rgba(249,216,213,1) 0%, rgba(249,210,209,1) 17%, rgba(229,211,207,1) 41%, rgba(246,242,241,1) 83%, rgba(240,238,237,0.9897681484703257) 100%);
margin: 0 ;
padding:10px 0 20px 0;
   `;
const Branding = styled.div`
display: flex;
padding: 10px;
gap: 5px;
justify-content: center;

    
   `
const BrandName = styled.h1`

font:30px Poppins, sans-serif;
font-weight: 1000;
color: #363636;
line-height: 2ch;
margin: 0;
@media screen and (max-width:500px) {
    font-size: 20px;
    
   }

    `
const BrandIcon = styled.img`
display: flex;
height: 40px;
width: 40px;
border-radius: 40px;
    `
export const NavBar = () => {
    return (
        <Container>
            <Branding>
                <BrandIcon src='https://thedesignlove.com/wp-content/uploads/2013/04/Famous-Orange-Logos.jpg' />
                <BrandName>
                    QUICK<span style={{ color: "orange" }}>EAT</span> </BrandName>
            </Branding>
        </Container>
    )
}
