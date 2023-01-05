import React from 'react'
import { Home } from './Pages/HomePage/sections/home'
import { HowItWorks } from './Pages/HomePage/sections/howItWorks'
import styled from 'styled-components';
import { NearByRestraunts } from './Pages/HomePage/sections/nearByRestraunts';
import { FavouriteFood } from './Pages/HomePage/sections/favouriteFood';
import { ServiceNumbers } from './Pages/HomePage/sections/serviceNumbers';
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
            <ServiceNumbers />
        </Container>
    )
}
