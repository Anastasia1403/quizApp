import QuizList from '../../components/QuizList';
import Title from '../../shared/Title';
import ContentWrapper from '../../shared/ContentWrapper/ContentWrapper';
import { QuizzesWrapper } from './styled';
import Button from '../../shared/Button';
import Text from '../../shared/Text';

function Home() {
    return (
        <>
            <Title>Quizzes Page</Title>
            <Text centered>
                Hi! You are on the quizzes page. You can take an existence quiz or create your own
            </Text>
            <QuizzesWrapper>
                <ContentWrapper>
                    <Title level='h3'>Default Quizzes</Title>
                    <QuizList />
                </ContentWrapper>
                <ContentWrapper>
                    <Title level='h3'>Custom Quizzes</Title>
                    <Button
                        onClick={() => {
                            console.log('create new quiz');
                        }}
                    >
                        Create New Quiz
                    </Button>
                </ContentWrapper>
            </QuizzesWrapper>
        </>
    );
}

export default Home;
