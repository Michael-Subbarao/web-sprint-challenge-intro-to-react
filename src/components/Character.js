// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-around;   
    flex-direction: row;
    background-color: #1d2d44;
    width: 90%;
    align-items:right;
    border-style: dashed;
    animation-duration: 3s;
    animation-name: slidein;
`
const StyledCharacterName = styled.h1`
    font-size: 3rem;
    color: #90caf9;
`
const StyledBirthYear = styled.h2`
    color:white;
    font-size:2rem;
`

const Character = (props)=>{
    return(
        <StyledContainer>
            <StyledCharacterName >{props.character.name}</StyledCharacterName>
            <StyledBirthYear>{props.character['birth_year']}</StyledBirthYear>
        </StyledContainer>
    )
}
export default Character;