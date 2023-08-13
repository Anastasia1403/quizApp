import styled from 'styled-components';

export const StyledAnswersBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`;
export const Answer = styled.button<{ isActive: boolean }>`
    border: 4px solid
        ${({ isActive, theme }) => (isActive ? 'transparent' : theme.colors.darkYellow)};
    background-color: ${({ isActive, theme }) =>
        isActive ? theme.colors.blue : theme.colors.yellow};
    color: ${({ isActive, theme }) => (isActive ? '#ffffff' : theme.colors.blue)};
    padding: 8px 16px;
    border-radius: 8px;
    font-size: 2rem;
    font-family: 'GFS Neohellenic', sans-serif;
    font-weight: 700;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
`;
