import React, { useEffect } from 'react'
import styled from 'styled-components'
import AOS from 'aos'
import "aos/dist/aos.css"

import { colorPalettes_3, colorPalettes_5, colorPalettes_7 } from '../../constants';

function Card({name, ...props}) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <StyledCard {...props}>
            <Title>{name}</Title>
        </StyledCard>
    );
}
  
const StyledCard = styled.div`
    width: 200px;
    height: 200px;
    background-image: url("./assets/plantmanager.png");
    background-color: ${colorPalettes_3};
    -webkit-box-shadow: 7px 7px 19px 0px ${colorPalettes_5}; 
    box-shadow: 7px 7px 19px 0px ${colorPalettes_5};
    border-radius: 16px;
    padding: 8px;
`;

const Title = styled.h2`
    color: ${colorPalettes_7};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
`;

export default Card;  