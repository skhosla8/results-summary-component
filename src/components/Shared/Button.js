import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${({$bgcolor}) => $bgcolor};
color: ${({$color}) => $color};
border: none;
padding: ${({$padding}) => $padding};
border-radius: ${({$borderradius}) => $borderradius};
margin: 1.7rem 0 1rem;
`;

function Button({children, ...rest}) {
    const { $bgcolor, $color, $padding, $borderradius} = rest;

    return (
        <StyledButton 
           $bgcolor={$bgcolor} 
           $color={$color} 
           $padding={$padding}
           $borderradius={$borderradius}
        >
            {children}
           </StyledButton>
    )
}

export default Button; 