import { QuizListItem } from '../quiz';

export interface Store {
  questions: QuizInitialState;
}

export interface QuizInitialState {
  questions: QuizListItem[];
  currentQuestion: QuizListItem;
  error: boolean;
  loading: boolean;
  quizProgress: number;
  score: number;
  gameFinish: boolean;
}

export type IGetState = () => Store;
