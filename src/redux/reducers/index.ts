import { combineReducers } from 'redux';
import QuestionsReducers from './QuestionsReducers';

const rootReducer = combineReducers({
  questions: QuestionsReducers,
});

export default rootReducer;
