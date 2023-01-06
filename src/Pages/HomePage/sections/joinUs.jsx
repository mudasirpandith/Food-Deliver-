import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
    display: flex;
    gap: 30px;
    @media screen and (max-width:1000px) {
        flex-direction: column;
        
    }
`
const Grid1 = styled.div`
    display: flex;
    flex: 4;
    
`


const Grid2 = styled.div`
display: flex;
flex: 4;

    
`
const Image = styled.img`
border-radius: 20px;


  @media screen and (max-width:500px) {
       width: 100%;
       height: 300px;
    }
    
`
export const JoinUs = () => {
    return (
        <Container>
            <Grid1>
                <Image src='https://bslthemes.com/html/quickeat/assets/img/photo-6.jpg' />
            </Grid1>
            <Grid2>
                <Image src='https://bslthemes.com/html/quickeat/assets/img/photo-7.jpg' />


            </Grid2>
        </Container>
    )
}
