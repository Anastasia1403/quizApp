import styled from 'styled-components';
import ContentWrapper from '../../shared/ContentWrapper';
import Button from '../../shared/Button';

export const QuizzesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    flex-grow: 1;
    width: 100%;
    max-width: 1000px;
`;
export const QuizzesContent = styled(ContentWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const NewQuizButton = styled(Button)`
    margin-top: auto;
`