import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { QUIZ_LIST } from '../../helpers/mock'
import Quiz from '../../components/Quiz';
import Title from '../../shared/Title';
import Button from '../../shared/Button';
import Text from '../../shared/Text';

function QuizPage() {
    const [isStarted, setIsStarted] = useState(false);
    // const [isFinished, setIsFinished] = useState(false);
	  // const [score, setScore] = useState(0);
    const {quizId} = useParams<string>();
    const quiz = QUIZ_LIST.find(quiz => quiz.id === Number(quizId));
    console.log(quizId);
    console.log(quiz);
  return (
    <>
        {!isStarted ?
        <>
            <Title>{quiz?.title}</Title>
            <Text centered>There is  quiz description here.</Text>
            <Text centered>This quiz is about ...</Text>
            <Text centered>It consists of {quiz?.questions.length} questions.</Text>
            <Text centered>Good luck!</Text>
            
            <Button onClick={() => setIsStarted(true)}>Start Quiz</Button>
        </>
        : quiz && <Quiz questions={quiz?.questions}/>
        }
    </>

  )
}

export default QuizPage