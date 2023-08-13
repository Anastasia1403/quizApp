import styled, { css, keyframes } from 'styled-components';
import star from './../../assets/img/svg/star-icon.svg';

export const ResultsWrapper = styled.div`
    display: flex;
    gap: 30px;
    align-items: center;
    p {
        font-family: 'GFS Neohellenic', sans-serif;
        font-weight: 700;
        font-size: 48px;
        color: ${({ theme }) => theme.colors.blue};
    }
`;
export const ResultList = styled.ul`
    display: flex;
    gap: 12px;
`;
const starMotion = keyframes`
    0% {
        transform: translate(-50%, -50%) scale(5) rotate(0deg);
    }
    90% {
        transform: translate(-50%, -50%) scale(1) rotate(360deg);
    }
    100% {
        transform: translate(-50%, -50%) scale(1) rotate(360deg);
    }
`;
export const ResultItem = styled.li<{ isCorrect: boolean | null; isCurrentQuestion: boolean }>`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    position: relative;
    font-size: unset;
    background-color: ${({ theme, isCorrect, isCurrentQuestion }) => {
        if (isCurrentQuestion) return theme.colors.yellow;
        return isCorrect === null ? 'transparent' : theme.colors.blue;
    }};
    border: 4px solid
        ${({ theme, isCurrentQuestion }) => {
            if (isCurrentQuestion) return 'transparent';
            return theme.colors.blue;
        }};
    ${({ isCorrect }) => {
        if (isCorrect) {
            return css`
                &:after {
                    content: url(${star});
                    display: block;
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    transform: translate(-50%, -50%) scale(5);
                    top: 50%;
                    left: 50%;
                    animation: ${starMotion} 1s ease-in-out forwards;
                }
            `;
        }
    }}
`;
