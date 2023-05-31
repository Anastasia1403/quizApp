import React, { useState } from 'react'
import { QuestionType, QuestionVariant } from '../../helpers/mock'
import QuestionsList from '../QuestionsList/QuestionsList';
import ScoreBlock from '../ScoreBlock';
import FinalQuizBlock from '../FinalQuizBlock';
interface PropsType {
  	questions: QuestionType[]
}
interface ResultType {
	id: number,
	isCorrect: boolean | null
}


function Quiz({questions}: PropsType) {
	const [activeQuestion, setActiveQuestion] = useState<number | null>(questions[0].id);
	const [activeAnswer, setActiveAnswer] = useState<number[] | null>(null);
	const [isFinished, setIsFinished] = useState(false);
	const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
	const [isAnswerAccepted, setIsAnswerAccepted] = useState(false);
	const [result, setResult] = useState<ResultType[]>(questions.map(quest => ({id: quest.id, isCorrect: null})));
	const changeQuestion = (id: number | null = null) => {
		setActiveQuestion(id)
	}
	
	const isLastQuestion = activeQuestion === questions[questions.length-1].id
	const onAcceptAnswer = () => {
		const quest = questions.find(quest => quest.id === activeQuestion);
		// const type = quest?.questionType 
		// if (type === QuestionVariant.OneVariant)
		const isAllAnswersSelected = quest?.answers.every(answer => {
			// debugger
			if(answer.isCorrect) return activeAnswer?.includes(answer.id)
			if(!answer.isCorrect) return !activeAnswer?.includes(answer.id)
		})
		if (isAllAnswersSelected) {
			setIsCorrect(true)
			const updatedResult = [...result];
			const currentQuestion = updatedResult.find(item => item.id === activeQuestion);
			if (currentQuestion) {
				currentQuestion.isCorrect = true;
				setResult(updatedResult);
			}

		} else {
			const updatedResult = [...result];
			const currentQuestion = updatedResult.find(item => item.id === activeQuestion)
			if (currentQuestion) {
				currentQuestion.isCorrect = false;
				setResult(updatedResult);
			}
			setIsCorrect(false)
		}
		if (isLastQuestion) {
			changeQuestion();
		} else {
			activeQuestion && changeQuestion(activeQuestion + 1)
		}
		setActiveAnswer(null)
		setIsAnswerAccepted(true)
		setTimeout(() => {
			setIsAnswerAccepted(false);
			if (isLastQuestion) setIsFinished(true);
		}, 3000)
	}
	const handleAnswerClick = (id: number) => {
		const quest = questions.find(quest => quest.id === activeQuestion);
		const type = quest?.questionType 
		if (type === QuestionVariant.OneVariant) {
			setActiveAnswer([id])
		}
		if (type === QuestionVariant.MultiVariant) {
			// debugger
			let newAnswers;
			if (activeAnswer && activeAnswer.length) {
				newAnswers = activeAnswer?.includes(id) ? activeAnswer?.filter(answer => answer !== id) : [...activeAnswer, id]
			} else {
				newAnswers = [id];
			}
			setActiveAnswer(newAnswers)
		}
	}
	// const isFirstQuestion = activeQuestion === questions[0].id;
	return (
		<>
			<ScoreBlock currentQuestion={activeQuestion} result={result}/>
			
			{
				!isFinished ?
				<QuestionsList
					questions={questions}
					activeAnswer={activeAnswer}
					activeQuestion={activeQuestion}
					handleAnswerClick={handleAnswerClick}
					onAcceptAnswer={onAcceptAnswer}
					isCorrect={isCorrect}
					isAnswerAccepted={isAnswerAccepted}
					isLastQuestion={isLastQuestion}
				/> : 
				<FinalQuizBlock result={result} />
			}
		</>
	)
}

export default Quiz