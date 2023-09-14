import React from 'react';
import '../../index.css';
import styled from 'styled-components';

const StyledResult = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: var(--result-bg-color);
width: 318px;
border-radius: 20px;
padding: 2rem;
`;

function Result({ children }) {
    return (
        <StyledResult>
            {children}
        </StyledResult>
    )
}

export default Result;