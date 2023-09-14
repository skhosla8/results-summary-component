import React from 'react';
import styled from 'styled-components';
import {
    Result,
    ResultScore,
    ResultPerformance,
    ResultFeedback,
    Summary,
    SummaryCategory,
    Title,
    Button
} from '../components';

const StyledResultsSummary = styled.div`
display: flex;
width: 636px;
height: 412px;
background-color: #FFFFFF;
border-radius: 20px;
font-family: Hanken Grotesk, sans-serif;
`;

function ResultsSummary() {
    const data = require('../data.json');

    const averageResult = Math.round((data?.map((entry, i) => entry.score)
        .reduce((acc, val) => acc + val, 0)) / 4);

    return (
        <StyledResultsSummary>
            <Result>
                <Title>Your Result</Title>

                <ResultScore>
                    {averageResult}
                </ResultScore>

                <ResultPerformance>Great</ResultPerformance>

                <ResultFeedback>65%</ResultFeedback>
            </Result>

            <Summary>
                <Title $issummary='true'>Summary</Title>

                {data.map((category, i) => (
                    <SummaryCategory
                        key={i}
                        icon={category.icon}
                        $category={category.category}
                        score={category.score}
                    >
                    </SummaryCategory>
                ))}

                <Button
                    $bgcolor='#303B59'
                    $color='#FFFFFF'
                    $padding='0.8rem'
                    $borderradius='16px'>Continue</Button>
            </Summary>
        </StyledResultsSummary>
    )
}

export default ResultsSummary;