import { Question, QuestionNumber, QuestionText, QuestionsWrapper } from './styled';
import AnswersBlock from '../AnswersBlock';
import AnswerAcceptedBlock from '../AnswerAcceptedBlock';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import { QuestionType } from '../../types';

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

function QuestionsList({
    questions,
    activeQuestion,
    activeAnswer,
    handleAnswerClick,
    isCorrect,
    isAnswerAccepted,
    onAcceptAnswer,
    isLastQuestion,
}: PropsType) {
    return (
        <QuestionsWrapper>
            {isAnswerAccepted ? (
                <AnswerAcceptedBlock isCorrect={isCorrect} />
            ) : (
                questions.map((question) => (
                    <Question key={question._id} isActive={question._id === activeQuestion}>
                        <QuestionNumber>
                            {questions.findIndex((question) => question._id === activeQuestion)+1}/{questions.length}
                        </QuestionNumber>
                        <QuestionText>
                            {question.text}
                            <Text>
                                {question.questionType == "OneVariant"
                                    ? 'This is question with only one right answer'
                                    : 'This question can have one or more right answers. You should chose all of them'}
                            </Text>
                        </QuestionText>
                        <AnswersBlock
                            answers={question.answers}
                            activeAnswer={activeAnswer}
                            onClick={handleAnswerClick}
                        />
                    </Question>
                ))
            )}
            {!isAnswerAccepted && (
                <Button onClick={onAcceptAnswer} disabled={!activeAnswer}>
                    {isLastQuestion ? 'Accept and finish quiz' : 'Accept'}
                </Button>
            )}
        </QuestionsWrapper>
    );
}

export default QuestionsList;
