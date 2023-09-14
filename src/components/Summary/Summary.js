import React from 'react';
import styled from 'styled-components'; 

const StyledSummary = styled.div`
 display: flex;
 flex-direction: column;
 width: 318px;
 padding: 2rem;
`;

function Summary({children} ) {
    return (
        <StyledSummary>{children}</StyledSummary>
    )
}

export default Summary;