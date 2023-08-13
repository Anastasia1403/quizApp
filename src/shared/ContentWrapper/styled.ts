import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
    background-color: ${({ theme }) => theme.colors.lightWatermelon};
    border-radius: 12px;
    padding: 20px;
    flex-grow: 1;
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
