import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuizLink = styled(Link)`
    display: block;
    background-color: ${({theme}) => theme.colors.lightBlue};
    color: ${({theme}) => theme.colors.darkBlue};
    padding: 12px;
    text-decoration: none;
    text-align: center;
`
export const StyledQuizList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`