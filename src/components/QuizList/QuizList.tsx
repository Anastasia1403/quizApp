import { api } from '../../api';
import { QuizLink, StyledQuizList } from './styled';
import { useQuery } from '@tanstack/react-query'

function QuizList() {
    const { isLoading, data: quizzes } = useQuery ({ queryKey: ['quizzes'], queryFn: api.fetchAllQuizzes })

    if (isLoading) return <p>Loading</p>
    return (
        <StyledQuizList>
            {quizzes?.map((quizItem) => {
                return (
                    <QuizLink to={`quiz/${quizItem._id}`} key={quizItem._id}>
                        {quizItem.title}
                    </QuizLink>
                );
            })}
        </StyledQuizList>
    );
}

export default QuizList;
