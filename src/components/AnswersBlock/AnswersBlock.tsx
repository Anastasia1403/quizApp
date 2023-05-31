import React from 'react'
import { AnswerType } from '../../helpers/mock'
import { Answer, StyledAnswersBlock } from './styled'

interface PropsType {
    answers: AnswerType[];
    onClick: (id: number) => void;
    activeAnswer: number[] | null;
}

function AnswersBlock({answers, onClick, activeAnswer}: PropsType) {
    return (
        <StyledAnswersBlock>
            {answers.map(answer => 
                <Answer 
                    key={answer.id}
                    isActive={Boolean(activeAnswer?.includes(answer.id))}
                    onClick={() => onClick(answer.id)}
                >
                    {answer.text}
                </Answer>
            )}
        </StyledAnswersBlock>
    )
}

export default AnswersBlock