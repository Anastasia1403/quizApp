import styled from "styled-components";
import ContentWrapper from "../../shared/ContentWrapper";

export const Question = styled.div<{isActive: boolean}>`
    display: ${({isActive}) => isActive ? 'grid' : 'none'};
    grid-template-columns: 6fr minmax(30%, max-content);
    grid-template-rows: max-content 1fr;
    gap: 20px;
    width: 100%;
`

export const QuestionsWrapper = styled(ContentWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    transition: all 0.3s ease;
`

export const QuestionText = styled.div`
    font-family: 'Gudea';
    font-weight: 700;
    font-size: 64px;
    color: ${({theme}) => theme.colors.blue};
    grid-row: 1 / 3;
    grid-column: 1 / 2;
`
export const QuestionNumber = styled.p`
    font-family: 'Gudea';
    font-weight: 700;
    font-size: 64px;
    color: ${({theme}) => theme.colors.blue};
    justify-self: end;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
`
export const Note = styled.p`
    font-family: 'Gudea';
    font-weight: 400;
    font-size: 32px;
    color: ${({theme}) => theme.colors.blue};
`