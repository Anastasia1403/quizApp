import React from 'react'
import { QUIZ_LIST } from '../../helpers/mock'
import { QuizLink, StyledQuizList } from './styled'

function QuizList() {
  return (
    <StyledQuizList>
        {QUIZ_LIST.map(quizItem => {
          return <QuizLink to={`quiz/${quizItem.id}`} key={quizItem.id}>{quizItem.title}</QuizLink>
        })}

    </StyledQuizList>
  )
}

export default QuizList