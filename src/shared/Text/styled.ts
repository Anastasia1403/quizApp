import styled from 'styled-components';

export const StyledText = styled.p<{
    type: 'primary' | 'secondary';
    size: number;
    centered: boolean;
    marginBottom: number;
}>`
    color: ${({ theme }) => theme.colors.blue};
    font-size: ${({ size }) => `${size}px`};
    font-family: 'Gudea', sans-serif;
    text-align: ${({ centered }) => (centered ? 'center' : 'left')};
    font-weight: 400;
    margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
`;
