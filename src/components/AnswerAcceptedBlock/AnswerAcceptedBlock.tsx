import React from 'react'
import { AnswerAcceptedWrapper } from './styled'

interface PropsType {
    isCorrect: boolean | null
}

function AnswerAcceptedBlock({isCorrect}: PropsType) {
    console.log('isCorrect', isCorrect)
    return (
        <AnswerAcceptedWrapper>
        {isCorrect ?
            <div>It is correct!
            Good for you! Here is you star</div> :
            <div>No, I'm sorry... It is not the right answer</div>
        }
        </AnswerAcceptedWrapper>
    )
}

export default AnswerAcceptedBlock