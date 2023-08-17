import QuizList from '../../components/QuizList';
import Title from '../../shared/Title';
import ContentWrapper from '../../shared/ContentWrapper/ContentWrapper';
import { NewQuizButton, QuizzesWrapper } from './styled';
import Text from '../../shared/Text';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <Title>Quizzes Page</Title>
            <Text centered marginBottom={20} >
                Hi! You are on the quizzes page. You can take an existence quiz or create your own
            </Text>
            <QuizzesWrapper>
                <ContentWrapper>
                    <Title level='h3'>Default Quizzes</Title>
                    <QuizList />
                </ContentWrapper>
                <ContentWrapper>
                    <Title level='h3'>Custom Quizzes</Title>
                    <Text centered size={20}>
                        It looks like you don’t have custom quizzes yet... What are waiting for?
                    </Text>
                    <NewQuizButton tag={Link} to='new-quiz'>
                        Create New Quiz
                    </NewQuizButton>
                </ContentWrapper>
            </QuizzesWrapper>
        </>
    );
}

export default Home;
