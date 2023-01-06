import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    background-color: #212529;
    flex-direction: column;
`
const Grid = styled.div`
display: flex;
@media screen and (max-width:1000px) {
    flex-direction: column;
    
}
    
`
const Grid1 = styled.div`
display: flex;
padding: 20px;
flex: 4;
flex-direction: column;
    
`



const Grid2 = styled.div`
padding: 20px;
display: flex;
flex: 2;
flex-direction: column;
    
`
const Grid3 = styled.div`
padding: 20px;
display: flex;
flex: 2;
flex-direction: column;
    
`
const LargeText = styled.h1`

font:42px Poppins, sans-serif;
font-weight: 1000;
color: #fffefe;
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

const Branding = styled.div`
display: flex;
padding: 10px;
gap: 5px;

`

const BrandName = styled.h1`

font:30px Poppins, sans-serif;
font-weight: 1000;
color: white;
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

const HeadingText = styled.h1`

font:32px Poppins, sans-serif;
font-weight: 1000;
color: #6e6c6c;
line-height: 2ch;
margin: 0 0 10px 0;
@media screen and (max-width:500px) {
    font-size: 28px;
    
   }
`
const LinkText = styled.p`
color:#b0adad;
font:16px Poppins, sans-serif;
line-height: 3ch;
font-weight: 300;
margin: 0 0 10px 0;

`
const Hr = styled.hr`
    display: flex;
    width: 90%;
  
  
`
const CopyRightText = styled.p`
    display: flex;
    color: grey;
    font:16px Poppins, sans-serif;
  justify-content: center;
  align-items: center;
`
export const Footer = () => {
    return (
        <Container>
            <Grid>
                <Grid1>
                    <Branding>
                        <BrandIcon src='https://thedesignlove.com/wp-content/uploads/2013/04/Famous-Orange-Logos.jpg' />
                        <BrandName>
                            QUICK<span style={{ color: "orange" }}>EAT</span> </BrandName>
                    </Branding>
                    <LargeText >
                        The Best <br /> Restaurants  <br /> in Your Home
                    </LargeText>
                    <SmallText >
                        Vitae congue mauris rhoncus aenean. Enim nulla aliquet porttitor lacus luctus accumsan tortor posuere. Tempus egestas sed sed risus pretium quam.
                    </SmallText>
                </Grid1>
                <Grid2>
                    <HeadingText>MENU</HeadingText>
                    <LinkText> Home &rarr;</LinkText>
                    <LinkText> About Us &rarr;</LinkText>
                    <LinkText> Contacts &rarr;</LinkText>
                    <LinkText> Restaunts &rarr;</LinkText>
                </Grid2>
                <Grid3>
                    <HeadingText>Contacts</HeadingText>
                    <LinkText>
                        1717 Harrison St, San Francisco, CA 94103, United States</LinkText>
                    <Hr />
                    <LinkText> quickeat@eat.com</LinkText>
                    <LinkText> +1 425 326 16 27
                    </LinkText>

                </Grid3>
            </Grid>

            <Hr />
            <CopyRightText>Copyright © 2022. Quickeat. All rights reserved.</CopyRightText>
        </Container>
    )
}
