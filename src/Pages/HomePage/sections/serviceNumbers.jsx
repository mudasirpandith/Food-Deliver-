import React from 'react'
import styled from 'styled-components';
import { NumberCard } from '../../../compoents/numberCard';
const Container = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    background-color: #f7f7f7;
    padding: 40px 20px;
    @media screen  and (max-width:500px){
        flex-direction: column;
     }
`
const LargeText = styled.h1`
display: flex;
flex: 2;
font:42px Poppins, sans-serif;
font-weight: 1000;
color: #363636;
line-height: 2ch;
margin: 0;
@media screen and (max-width:500px) {
    font-size: 38px;
    
   }
`
export const ServiceNumbers = () => {
    const list1 = ['Satisfied', 'Customers']
    const list2 = ['Best', 'Restaurants']
    const list3 = ['Food', 'Delivered']
    return (
        <Container>
            <LargeText>Service <br /> shows good <br /> taste.</LargeText>
            <NumberCard name={list1} number='986' />
            <NumberCard name={list2} number='12' />
            <NumberCard name={list3} number='1K+' />
        </Container>
    )
}
