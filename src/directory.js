import React from 'react'
import { Home } from './sections/home'
import { HowItWorks } from './sections/howItWorks'
import styled from 'styled-components';
import { NearByRestraunts } from './sections/nearByRestraunts';
import { FavouriteFood } from './sections/favouriteFood';
const Container = styled.div`
display:flex;
gap: 40px;
flex-direction: column;
`
export const Directory = () => {
    return (
        <Container>
            <Home />
            <HowItWorks />
            <NearByRestraunts />
            <FavouriteFood />
        </Container>
    )
}
