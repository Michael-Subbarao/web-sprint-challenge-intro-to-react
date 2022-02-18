// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    justify-content: space-between;   
    flex-direction: row;
    background-color: #1d2d44;
`
const StyledCharacterName = styled.h1`
    font-size: 3rem;
    color: #f0ebd8;
`


const Character = (props)=>{
    return(
        <StyledContainer>
            <StyledCharacterName >{props.character.name}</StyledCharacterName>

        </StyledContainer>
    )
}
export default Character;