// import { IAction } from "./index";
import { QuizListItem } from '../quiz';

export const Get_QUIZ_REQ = 'Get_QUIZ_REQ';
export const GET_QUIZ_SUCCESS = 'GET_QUIZ_SUCCESS';
export const GET_QUIZ_FAILED = 'GET_QUIZ_FAILED';
export const GET_NEXT_QUESTION = 'GET_NEXT_QUESTION';
export const SET_SCORE = 'SET_SCORE';

export interface QuizRequestAction {
  type: typeof Get_QUIZ_REQ;
}

export interface QuizRequestSuccessAction {
  type: typeof GET_QUIZ_SUCCESS;
  payload: QuizListItem[];
}

export interface QuizRequestFailedAction {
  type: typeof GET_QUIZ_FAILED;
}

export interface GetNextQuestionAction {
  type: typeof GET_NEXT_QUESTION;
}

export interface SetScoreAction {
  type: typeof SET_SCORE;
}

export type ListQuizAction =
  | QuizRequestAction
  | QuizRequestSuccessAction
  | QuizRequestFailedAction
  | GetNextQuestionAction
  | SetScoreAction;
