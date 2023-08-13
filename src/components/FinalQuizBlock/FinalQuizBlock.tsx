import { FinalQuizBlockWrapper, FinalText } from './styled';
import Button from '../../shared/Button';
import { Link } from 'react-router-dom';

interface PropsType {
    result: ResultType[];
}
interface ResultType {
    id: number;
    isCorrect: boolean | null;
}
function FinalQuizBlock({ result }: PropsType) {
    const score =
        (result.reduce((score, item) => {
            if (item.isCorrect) return score + 1;
            return score;
        }, 0) /
            result.length) *
        100;
    return (
        <FinalQuizBlockWrapper>
            <FinalText>Congratulations!</FinalText>
            <FinalText>You have finished this quiz</FinalText>
            <FinalText>Your score is {score.toFixed(1)}%</FinalText>
            <FinalText>You can see your statistic in your dashboard</FinalText>
            <Button variant='secondary' as={Link} to='/'>
                Go To Profile
            </Button>
        </FinalQuizBlockWrapper>
    );
}

export default FinalQuizBlock;
