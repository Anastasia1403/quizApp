import styled from "styled-components";
import ContentWrapper from "../../shared/ContentWrapper";

export const QuizzesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;
    flex-grow: 1;
    width: 100%;
    max-width: 1000px;
`
export const QuizzesContent = styled(ContentWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
`
// export const HomeContent = styled.div`
//     display: flex;
//     gap: 50px;
//     width: 100%;
//     height: 100%;
// `