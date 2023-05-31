import React from 'react'
import { Note, Question, QuestionNumber, QuestionText, QuestionsWrapper } from './styled'
import AnswersBlock from '../AnswersBlock'
import { QuestionType, QuestionVariant } from '../../helpers/mock'
import AnswerAcceptedBlock from '../AnswerAcceptedBlock';
import Button from '../../shared/Button';
import Text from '../../shared/Text';

interface PropsType {
    questions: QuestionType[];
    activeQuestion: number | null;
    activeAnswer: number[] | null;
    handleAnswerClick: (id: number) => void;
    isCorrect: boolean | null;
    isAnswerAccepted: boolean;
    isLastQuestion: boolean;
    onAcceptAnswer: () => void;
}

function QuestionsList({questions, activeQuestion, activeAnswer, handleAnswerClick, isCorrect, isAnswerAccepted, onAcceptAnswer, isLastQuestion}: PropsType) {
  
  return (
    <QuestionsWrapper>
    {isAnswerAccepted ? 
        <AnswerAcceptedBlock isCorrect={isCorrect}/> :
          questions.map(question => (
            <Question key={question.id} isActive={question.id === activeQuestion}>
                <QuestionNumber>{activeQuestion}/{questions.length}</QuestionNumber>
                  <QuestionText>
                    {question.text}
                    <Text>
                      {question.questionType === QuestionVariant.OneVariant ? 
                      'This is question with only one right answer' : 
                      'This question can have one or more right answers. You should chose all of them'}
                    </Text>
                    </QuestionText>
                  <AnswersBlock answers={question.answers} activeAnswer={activeAnswer} onClick={handleAnswerClick}/>
                  
              </Question>
          ))}
          { !isAnswerAccepted &&
				<Button onClick={onAcceptAnswer} disabled={!Boolean(activeAnswer)}>
					{isLastQuestion ? 'Accept and finish quiz' : 'Accept'}
				</Button>
			}
    </QuestionsWrapper>
  )
}

export default QuestionsList