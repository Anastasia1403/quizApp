import styled from 'styled-components';

export const StyledButton = styled.button<{ variant: 'primary' | 'secondary' }>`
    display: flex;
    gap: 12px;
    align-items: center;
    justify-content: center;
    padding: 12px;
    background-color: ${({ theme, variant }) => {
        if (variant === 'primary') return theme.colors.watermelon;
        if (variant === 'secondary') return theme.colors.yellow;
    }};
    color: ${({ theme }) => theme.colors.blue};
    text-decoration: none;
    border-radius: 8px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 700;
    width: fit-content;
    box-shadow: 0px 4px 4px rgba(38, 58, 122, 0.25);
    transition: all 0.3s ease-in-out;
    &:disabled {
        color: ${({ theme }) => theme.colors.lightWatermelon};
        cursor: not-allowed;
    }
    &:hover {
        transform: scale(1.05);
        background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme, variant }) => {
        if (variant === 'primary') return theme.colors.watermelon;
        if (variant === 'secondary') return theme.colors.yellow;
    }};
    }
`;
