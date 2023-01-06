import React from 'react'
import { Home } from './Pages/HomePage/sections/home'
import { HowItWorks } from './Pages/HomePage/sections/howItWorks'
import styled from 'styled-components';
import { NearByRestraunts } from './Pages/HomePage/sections/nearByRestraunts';
import { FavouriteFood } from './Pages/HomePage/sections/favouriteFood';
import { ServiceNumbers } from './Pages/HomePage/sections/serviceNumbers';
import { NavBar } from './compoents/navBar';
import { CustomerReview } from './Pages/HomePage/customerReview';
import { JoinUs } from './Pages/HomePage/sections/joinUs';
import { Footer } from './Pages/HomePage/sections/footer';
const Container = styled.div`
display:flex;

flex-direction: column;
`
export const Directory = () => {
    return (
        <Container>
            <NavBar />
            <Home />
            <HowItWorks />
            <NearByRestraunts />
            <FavouriteFood />
            <ServiceNumbers />
            <CustomerReview />
            {/* <JoinUs /> */}
            <Footer />
        </Container>
    )
}
