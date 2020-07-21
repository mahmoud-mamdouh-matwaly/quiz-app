import {
  GET_QUIZ_FAILED,
  GET_QUIZ_SUCCESS,
  Get_QUIZ_REQ,
  GET_NEXT_QUESTION,
  SET_SCORE,
  ListQuizAction,
} from '../../@types/Actions/quizActions';

import { QuizInitialState } from '../../@types/store/state';

const initialState: QuizInitialState = {
  questions: [],
  currentQuestion: {
    category: '',
    type: '',
    difficulty: '',
    question: '',
    correct_answer: '',
    incorrect_answers: [],
    answers: [],
  },
  error: false,
  loading: false,
  quizProgress: 0,
  score: 0,
  gameFinish: false,
};

export default function listQuiz(state = initialState, action: ListQuizAction) {
  switch (action.type) {
    case Get_QUIZ_REQ:
      return {
        ...state,
        loading: true,
      };
    case GET_QUIZ_SUCCESS:
      return {
        ...state,
        questions: action.payload,
        currentQuestion: action.payload[0],
        quizProgress: 1,
        loading: false,
      };
    case GET_QUIZ_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case GET_NEXT_QUESTION: {
      return {
        ...state,
        currentQuestion: state.questions[state.quizProgress],
        quizProgress: state.quizProgress + 1,
        gameFinish: state.quizProgress === state.questions.length,
      };
    }
    case SET_SCORE:
      return {
        ...state,
        score: state.score + 1,
      };

    default:
      return state;
  }
}
