import styled from 'styled-components';

export const MainBlock = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
    background-color: ${({theme}) => theme.colors.lightYellow};
`