import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Quiz from '../../components/Quiz';
import Title from '../../shared/Title';
import Button from '../../shared/Button';
import Text from '../../shared/Text';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../api';

function QuizPage() {    
    const [isStarted, setIsStarted] = useState(false);
    const { quizId } = useParams<string>();
    const { data: quiz } = useQuery({ queryKey: ['quiz'], queryFn: () => api.fetchOneQuiz(quizId) })

    return (
        <>
            {!isStarted ? (
                <>
                    <Title>{quiz?.title}</Title>
                    <Text centered>{quiz?.description}</Text>
                    <Text centered>It consists of {quiz?.questions.length} questions.</Text>
                    <Text centered marginBottom={20}>Good luck!</Text>

                    <Button onClick={() => setIsStarted(true)}>Start Quiz</Button>
                </>
            ) : (
                quiz && <Quiz questions={quiz?.questions} />
            )}
        </>
    );
}

export default QuizPage;
