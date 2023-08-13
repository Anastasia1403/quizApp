export enum QuestionVariant {
    OneVariant,
    MultiVariant,
}
export interface AnswerType {
    id: number;
    text: string;
    isCorrect: boolean;
}

export interface QuestionType {
    id: number;
    text: string;
    questionType: QuestionVariant;
    answers: AnswerType[];
}
interface QuizType {
    id: number;
    title: string;
    questions: QuestionType[];
}

export const QUIZ_LIST: QuizType[] = [
    {
        id: 1,
        title: 'QUIZ 1',
        questions: [
            {
                id: 1,
                text: 'How many planets on the Solar System?',
                questionType: QuestionVariant.OneVariant,
                answers: [
                    {
                        id: 1,
                        text: '4',
                        isCorrect: false,
                    },
                    {
                        id: 2,
                        text: '8',
                        isCorrect: true,
                    },
                    {
                        id: 3,
                        text: '16',
                        isCorrect: false,
                    },
                    {
                        id: 4,
                        text: '9',
                        isCorrect: false,
                    },
                ],
            },
            {
                id: 2,
                text: 'Which language is official in Brazil?',
                questionType: QuestionVariant.OneVariant,
                answers: [
                    {
                        id: 1,
                        text: 'Brazilian',
                        isCorrect: false,
                    },
                    {
                        id: 2,
                        text: 'English',
                        isCorrect: false,
                    },
                    {
                        id: 3,
                        text: 'Portugal',
                        isCorrect: true,
                    },
                    {
                        id: 4,
                        text: 'Spanish',
                        isCorrect: false,
                    },
                ],
            },
            {
                id: 3,
                text: 'Who lives in Bikini Bottom?',
                questionType: QuestionVariant.MultiVariant,
                answers: [
                    {
                        id: 1,
                        text: 'Sponge Bob Square Pants',
                        isCorrect: true,
                    },
                    {
                        id: 2,
                        text: 'Starfish Patrick',
                        isCorrect: true,
                    },
                    {
                        id: 3,
                        text: 'Snail Gremmy',
                        isCorrect: false,
                    },
                    {
                        id: 4,
                        text: 'Homster Andy',
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        title: 'QUIZ 2',
        questions: [
            {
                id: 1,
                text: 'How many planets on the Solar System?',
                questionType: QuestionVariant.OneVariant,
                answers: [
                    {
                        id: 1,
                        text: '4',
                        isCorrect: false,
                    },
                    {
                        id: 2,
                        text: '8',
                        isCorrect: true,
                    },
                    {
                        id: 3,
                        text: '16',
                        isCorrect: false,
                    },
                    {
                        id: 4,
                        text: '9',
                        isCorrect: false,
                    },
                ],
            },
            {
                id: 2,
                text: 'Which language is official in Brazil?',
                questionType: QuestionVariant.OneVariant,
                answers: [
                    {
                        id: 1,
                        text: 'Brazilian',
                        isCorrect: false,
                    },
                    {
                        id: 2,
                        text: 'English',
                        isCorrect: false,
                    },
                    {
                        id: 3,
                        text: 'Portugal',
                        isCorrect: true,
                    },
                    {
                        id: 4,
                        text: 'Spanish',
                        isCorrect: false,
                    },
                ],
            },
            {
                id: 3,
                text: 'When did The World War II begin?',
                questionType: QuestionVariant.OneVariant,
                answers: [
                    {
                        id: 1,
                        text: 'in 1913',
                        isCorrect: false,
                    },
                    {
                        id: 2,
                        text: 'in 1941',
                        isCorrect: false,
                    },
                    {
                        id: 3,
                        text: 'in 1939',
                        isCorrect: true,
                    },
                    {
                        id: 4,
                        text: 'in 2022',
                        isCorrect: false,
                    },
                ],
            },
            {
                id: 4,
                text: 'Who lives in Bikini Bottom?',
                questionType: QuestionVariant.MultiVariant,
                answers: [
                    {
                        id: 1,
                        text: 'Sponge Bob Square Pants',
                        isCorrect: true,
                    },
                    {
                        id: 2,
                        text: 'Starfish Patrick',
                        isCorrect: true,
                    },
                    {
                        id: 3,
                        text: 'Snail Gremmy',
                        isCorrect: false,
                    },
                    {
                        id: 4,
                        text: 'Homster Andy',
                        isCorrect: false,
                    },
                ],
            },
        ],
    },
];
