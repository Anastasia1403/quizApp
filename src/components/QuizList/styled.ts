import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const QuizLink = styled(Link)`
    display: block;
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    padding: 16px;
    text-decoration: none;
    text-align: center;
    transition: all 0.3s ease-in-out;
    border-radius: 4px;
    :hover {
        transform: scale(1.1, 1.1);
    }
    :active {
        transform: scale(1.03, 1.03);
    }
`;
export const StyledQuizList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 70%;
    :hover > ${QuizLink}:not(:hover) {
        filter: blur(3px);
        transform: scale(0.97, 0.97);
    }
`;
