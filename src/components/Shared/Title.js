import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.div`
font-weight: 700;
font-size: 1.2rem;
display: flex;
justify-content: ${({$issummary }) => $issummary ? 'left' : 'center'};
color: ${({$issummary}) => $issummary ? '#303B59' : '#CAC9FF'};
margin-bottom: ${({$issummary}) => $issummary && '1.5rem'};
`;

function Title({$issummary, children}) {
    return (
      <StyledTitle $issummary={$issummary}>{children}</StyledTitle>
    )
}

export default Title;