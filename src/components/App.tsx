import React from 'react';
import { connect } from 'react-redux';

// types
import { Store, QuizInitialState } from '../@types/store/state';

// Actions
import { getQuizListItem } from '../redux/actions';

// Components
import Header from './header';
import QuestionCard from './questionCard';
import Spinner from './spinner';
import DifficultyCard from './difficultyCard';
import Dashboard from './dashboard';

// Styles
import { Container } from './App.styles';

type Props = {
  listQuiz: QuizInitialState;
};

const App: React.FC<Props> = (props: any) => {
  const {
    listQuiz: { loading, questions, gameFinish },
  } = props;

  return (
    <Container>
      <Header />
      {loading && <Spinner />}
      {questions.length === 0 && <DifficultyCard />}
      {questions.length !== 0 && !gameFinish && <QuestionCard />}
      {gameFinish && <Dashboard />}
    </Container>
  );
};
const mapStateToProps = (state: Store) => {
  return {
    listQuiz: state.questions,
    gameFinish: state.questions.gameFinish,
  };
};
export default connect(mapStateToProps, { getQuizListItem })(App);
