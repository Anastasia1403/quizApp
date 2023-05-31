import React from 'react'
import { ResultItem, ResultList, ResultsWrapper } from './styled'

interface ResultType {
    id: number,
    isCorrect: boolean | null,
}
interface PropsType {
	result: ResultType[],
    currentQuestion: number | null,
}


function ScoreBlock({result, currentQuestion}: PropsType) {
  return (
    <ResultsWrapper>
        <p>Your progress</p>
        <ResultList>
            
        {
            result.map((item) => {
                return (
                    <ResultItem key={item.id} isCurrentQuestion={currentQuestion===item.id} isCorrect={item.isCorrect}></ResultItem>
                )
            })
        }
        </ResultList>
    </ResultsWrapper>
  )
}

export default ScoreBlock