import styled from "styled-components";

export const StyledText = styled.p<{type: 'primary' | 'secondary'; size: number, centered: boolean}>`
    color: ${({theme}) => theme.colors.blue};
    font-size: ${({size}) => `${size}px`};
    font-family: 'Gudea', sans-serif;
    text-align: ${({centered}) => centered ? 'center' : 'left'};
    font-weight: 400;
`