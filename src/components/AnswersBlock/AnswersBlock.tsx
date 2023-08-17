import { AnswerType } from '../../types';
import { Answer, StyledAnswersBlock } from './styled';

interface PropsType {
    answers: AnswerType[];
    onClick: (id: number) => void;
    activeAnswer: number[] | null;
}

function AnswersBlock({ answers, onClick, activeAnswer }: PropsType) {
    return (
        <StyledAnswersBlock>
            {answers.map((answer) => (
                <Answer
                    key={answer._id}
                    isActive={Boolean(activeAnswer?.includes(answer._id))}
                    onClick={() => onClick(answer._id)}
                >
                    {answer.text}
                </Answer>
            ))}
        </StyledAnswersBlock>
    );
}

export default AnswersBlock;
