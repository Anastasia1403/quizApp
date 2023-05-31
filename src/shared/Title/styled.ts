import styled, { StyledProps, css } from 'styled-components';
import { LevelType } from './Title';

const getTitleStyles = ({ level }: StyledProps<{ level: LevelType }>) => {
    switch (level) {
        case 'h1':
            return css`
                font-size: 96px;
            `
        case 'h2':
            return css`
                font-size: 52px;
            `
        case 'h3':
            return css`
                font-size: 36px;
            `;
        case 'h4':
            return css`
                font-size: 24px;
            `;
    }
}

export const StyledTitle = styled.h1<{level: LevelType}>`
    color: ${({theme}) => theme.colors.blue};
    font-family: 'GFS Neohellenic', sans-serif;
    font-weight: 700;
    text-align: center;
    ${getTitleStyles};
`