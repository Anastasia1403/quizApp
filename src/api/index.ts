import axios from "axios";
import { QuizType } from "../types";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    headers: {'Content-Type': 'application/json'}
  });

export const api = {
    fetchOneQuiz: (id?: string) => {
        if(id) {
            return instance.get<QuizType>(`/quizzes/${id}`)
            .then(response => response.data)
        }
    },
    fetchAllQuizzes: () => {
        return instance.get<QuizType[]>('/quizzes')
        .then(response => response.data)
    }
}