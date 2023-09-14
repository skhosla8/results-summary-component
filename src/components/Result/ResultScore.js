import React from 'react';
import '../../index.css';
import styled from 'styled-components';

const StyledResultScorePart = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 150px;
width: 150px;
border-radius: 50%;
background: linear-gradient(to bottom, var(--linear-gradient-color1), var(--linear-gradient-color2));
font-size: 3.5rem;
font-weight: 800;
color: #FFFFFF;
margin: 1rem 0;
`;

const StyledResultScoreTotal = styled.div`
  color: var(--text-color-blue);
  font-size: 0.9rem;
  font-weight: 500;
`;


function ResultScore({children}) {
    return (
        <StyledResultScorePart>
            {children}
            <StyledResultScoreTotal>of 100</StyledResultScoreTotal>
        </StyledResultScorePart>
    )
}

export default ResultScore;