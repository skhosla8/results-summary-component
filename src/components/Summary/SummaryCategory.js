import React from 'react';
import styled from 'styled-components';
import '../../index.css';
import { iconReaction, iconMemory, iconVerbal, iconVisual } from '../../assets';

const StyledSummaryCategoryBorder = styled.div`
   background-color: ${({ $category }) => {
        if ($category === 'Reaction') return '#ffdada';
        if ($category === 'Memory') return '#fff3e1';
        if ($category === 'Verbal') return '#e0f5f0';
        if ($category === 'Visual') return '#dee0f4';
    }};
   padding: 0.05rem 0.09rem;
   border-radius: 5px;
   height: 42px;
   margin-bottom: 0.8rem;
`;

const StyledSummaryCategory = styled.div`
  display: flex; 
  justify-content: space-between;
  background-color: ${({ $category }) => {
        if ($category === 'Reaction') return 'var(--light-red)';
        if ($category === 'Memory') return 'var(--light-yellow)';
        if ($category === 'Verbal') return 'var(--light-green)';
        if ($category === 'Visual') return 'var(--light-blue)';
    }};
  padding: 0.7rem 0.9rem;
  border-radius: 8px;
  font-size: 0.85rem;
  margin-bottom: 0.8rem;
`;

const StyledSummaryTitle = styled.div`
   display: flex;
   color: ${({ $category }) => {
        if ($category === 'Reaction') return 'var(--dark-red)';
        if ($category === 'Memory') return 'var(--dark-yellow)';
        if ($category === 'Verbal') return 'var(--dark-green)';
        if ($category === 'Visual') return 'var(--dark-blue)';
    }};
`;

const StyledSummaryScore = styled.div`
    span {
        &:first-child {
            color: #303B59;
        }
        color: #979797;
    
         &:after {
            content: " ";
         }
    }
`;

function SummaryCategory({ ...rest }) {
    let { icon, $category, score } = rest;

    const handleIconInstance = () => {
        if ($category === 'Reaction') {
            icon = iconReaction;
        } else if ($category === 'Memory') {
            icon = iconMemory;
        } else if ($category === 'Verbal') {
            icon = iconVerbal;
        } else {
            icon = iconVisual;
        }

        return icon;
    };

    return (
        <StyledSummaryCategoryBorder $category={$category}>
            <StyledSummaryCategory $category={$category}>
                <StyledSummaryTitle $category={$category}>
                    <img src={handleIconInstance()} alt='summary-category-icon' />

                    <div style={{ marginLeft: '0.5rem' }}>{$category}</div>
                </StyledSummaryTitle>

                <div>
                    <StyledSummaryScore>
                        <span>{score}</span>
                        <span>/</span>
                        <span>100</span>
                    </StyledSummaryScore>
                </div>
            </StyledSummaryCategory>
        </StyledSummaryCategoryBorder>
    )
}

export default SummaryCategory;
