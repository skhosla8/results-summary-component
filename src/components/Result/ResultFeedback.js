import React from 'react';
import '../../index.css';
import styled from 'styled-components';

const StyledResultFeedback = styled.div`
   color: var(--text-color-blue);
   font-size: 0.9rem;
   width: 220px;
   text-align: center;
`;
function ResultFeedback({ children }) {
    return (
        <StyledResultFeedback>
            Your performance exceeds {children} of the people conducting the test here!
        </StyledResultFeedback>
    )
}

export default ResultFeedback;