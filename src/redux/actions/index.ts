import { Dispatch } from 'redux';
import { baseURL } from '../../api';
import { ActionCreator } from '../../@types/Actions';
import {
  Get_QUIZ_REQ,
  GET_QUIZ_SUCCESS,
  GET_QUIZ_FAILED,
  GET_NEXT_QUESTION,
  SET_SCORE,
  ListQuizAction,
} from '../../@types/Actions/quizActions';

import { shuffleArray } from '../../utils';

/**
 * Fetch endpoint to get quiz items
 * @param  {string} difficulty
 * @param  {string} numberOfQuiz
 * @param  {string} typeOfQuiz
 * @returns ActionCreator
 */

export const getQuizListItem = (
  difficulty: string,
  numberOfQuiz: string,
  typeOfQuiz: string,
): ActionCreator => {
  return async (dispatch: Dispatch<ListQuizAction>): Promise<void> => {
    dispatch({ type: Get_QUIZ_REQ });
    await baseURL
      .get(`?amount=${numberOfQuiz}&difficulty=${difficulty}&type=${typeOfQuiz}`)
      .then((res) => {
        const data = res.data.results.map((question) => ({
          ...question,
          answers: shuffleArray([...question.incorrect_answers, question.correct_answer]),
        }));
        dispatch({ type: GET_QUIZ_SUCCESS, payload: data });
      })
      .catch(() => {
        dispatch({ type: GET_QUIZ_FAILED });
      });
  };
};

/**
 * to get next question in questions
 * @returns ListQuizAction
 */

export const nextQuestion = (): ListQuizAction => {
  return { type: GET_NEXT_QUESTION };
};

/**
 * to calculate user's score
 * @returns ListQuizAction
 */

export const setScore = (): ListQuizAction => {
  return { type: SET_SCORE };
};
