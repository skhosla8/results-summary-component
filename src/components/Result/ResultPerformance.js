import React from 'react';
import styled from 'styled-components';

const StyledResultPerformance = styled.div`
 color: #FFFFFF;
 font-size: 1.2rem;
 margin: 1.8rem 0 1rem;
`;

function ResultPerformance({ children }) {
    return (
        <StyledResultPerformance>
            {children}
        </StyledResultPerformance>

    )
}

export default ResultPerformance; 