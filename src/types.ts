export enum QuestionVariant {
    OneVariant,
    MultiVariant,
}
export interface AnswerType {
    _id: number;
    text: string;
    isCorrect: boolean;
}

export interface QuestionType {
    _id: number;
    text: string;
    // questionType: QuestionVariant;
    questionType: string;
    answers: AnswerType[];
}
export interface QuizType {
    description: string;
    _id: number;
    title: string;
    questions: QuestionType[];
}