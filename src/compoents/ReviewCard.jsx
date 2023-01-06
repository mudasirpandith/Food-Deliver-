import React from 'react'
import styled from 'styled-components';
const Container = styled.div`
display: flex;
flex-direction: column;
`
const User = styled.div`
display: flex;
gap: 10px;
padding: 10px;
    
`
const Username = styled.h1`
display: flex;
flex-direction: 4;
font:22px Poppins, sans-serif;
font-weight: 500;
color: #363636;
justify-content: center;
align-items: center;
line-height: 2ch;
margin: 0;
@media screen and (max-width:1200px) {
    font-size: 18px;
    
   }

`
const UserIcon = styled.img`
    display: flex;
    height: 70px;
    width: 70px;
    border-radius: 50%;

`
const Review = styled.h4`
color:#787878;
font:28px Poppins, sans-serif;
@media screen and (max-width:1200px) {
    font-size: 18px;
    
   }

`

export const ReviewCard = () => {
    return (
        <Container>
            <Review>"Lorem ipsum dassumenda nostrum ad, odit quasi, consequuntur suscipit quod at facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos eveniet distinctio maxime porro provident dicta unde, accusantium reprehenderit asperiores corporis, ab tenetur a ducimus, dolores officia mollitia eos fugiat veniam. "</Review>

            <User>
                <UserIcon src='https://bslthemes.com/html/quickeat/assets/img/photo-5.jpg' />
                <Username>
                    Thomas
                    <br />
                    ⭐⭐⭐⭐⭐

                </Username>

            </User>
        </Container>
    )
}
