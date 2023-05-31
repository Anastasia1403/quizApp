import styled from "styled-components";
import ContentWrapper from "../../shared/ContentWrapper";

export const FinalQuizBlockWrapper = styled(ContentWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.colors.lightBlue};
`
export const FinalText = styled.p`
    color: ${({theme}) => theme.colors.white};
    font-family: 'Gudea';
    font-weight: 700;
    font-size: 64px;
    text-align: center;
    &:last-of-type {
        margin-bottom: auto;
    }
`
