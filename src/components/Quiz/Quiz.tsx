import { useState } from 'react';
import QuestionsList from '../QuestionsList/QuestionsList';
import ScoreBlock from '../ScoreBlock';
import FinalQuizBlock from '../FinalQuizBlock';
import { QuestionType } from '../../types';
interface PropsType {
    questions: QuestionType[];
}
interface ResultType {
    id: number;
    isCorrect: boolean | null;
}

function Quiz({ questions }: PropsType) {
    const [activeQuestion, setActiveQuestion] = useState<number | null>(questions[0]._id);
    const [activeAnswer, setActiveAnswer] = useState<number[] | null>(null);
    const [isFinished, setIsFinished] = useState(false);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
    const [isAnswerAccepted, setIsAnswerAccepted] = useState(false);
    const [result, setResult] = useState<ResultType[]>(
        questions.map((quest) => ({ id: quest._id, isCorrect: null })),
    );
    const changeQuestion = () => {
        if (isLastQuestion) setActiveQuestion(null);
        else {
            const nextQuestionIndex = questions.findIndex(question => question._id === activeQuestion)+1
            setActiveQuestion(questions[nextQuestionIndex]._id);
        }
    };

    const isLastQuestion = activeQuestion === questions[questions.length - 1]._id;
    const onAcceptAnswer = () => {
        const quest = questions.find((quest) => quest._id === activeQuestion);
        const isAllAnswersSelected = quest?.answers.every((answer) => {
            if (answer.isCorrect) return activeAnswer?.includes(answer._id);
            if (!answer.isCorrect) return !activeAnswer?.includes(answer._id);
        });
        if (isAllAnswersSelected) {
            setIsCorrect(true);
            const updatedResult = [...result];
            const currentQuestion = updatedResult.find((item) => item.id === activeQuestion);
            if (currentQuestion) {
                currentQuestion.isCorrect = true;
                setResult(updatedResult);
            }
        } else {
            const updatedResult = [...result];
            const currentQuestion = updatedResult.find((item) => item.id === activeQuestion);
            if (currentQuestion) {
                currentQuestion.isCorrect = false;
                setResult(updatedResult);
            }
            setIsCorrect(false);
        }
        changeQuestion();
        setActiveAnswer(null);
        setIsAnswerAccepted(true);
        setTimeout(() => {
            setIsAnswerAccepted(false);
            if (isLastQuestion) setIsFinished(true);
        }, 3000);
    };
    const handleAnswerClick = (id: number) => {
        const quest = questions.find((quest) => quest._id === activeQuestion);
        const type = quest?.questionType;
        if (type === "OneVariant") {
            setActiveAnswer([id]);
        }
        if (type === "MultiVariant") {
            let newAnswers;
            if (activeAnswer && activeAnswer.length) {
                newAnswers = activeAnswer?.includes(id)
                    ? activeAnswer?.filter((answer) => answer !== id)
                    : [...activeAnswer, id];
            } else {
                newAnswers = [id];
            }
            setActiveAnswer(newAnswers);
        }
    };
    return (
        <>
            <ScoreBlock currentQuestion={activeQuestion} result={result} />

            {!isFinished ? (
                <QuestionsList
                    questions={questions}
                    activeAnswer={activeAnswer}
                    activeQuestion={activeQuestion}
                    handleAnswerClick={handleAnswerClick}
                    onAcceptAnswer={onAcceptAnswer}
                    isCorrect={isCorrect}
                    isAnswerAccepted={isAnswerAccepted}
                    isLastQuestion={isLastQuestion}
                />
            ) : (
                <FinalQuizBlock result={result} />
            )}
        </>
    );
}

export default Quiz;
