import React from 'react';
import { connect } from 'react-redux';

// Types
import { Store, QuizInitialState } from '../../@types/store/state';

// Actions
import { getQuizListItem } from '../../redux/actions';

// Styles
import { Container, Cards, CardItem } from './DifficultyCard.styles';

type Props = {
  getQuizListItem: (difficulty: string, numberOfQuiz: string, typeOfQuiz: string) => void;
  listQuiz: QuizInitialState;
};

const difficulties: string[] = ['easy', 'medium', 'hard'];
const numberOfQuiz = '10';
const typeOfQuiz = 'multiple';

const DifficultyCard: React.FC<Props> = (props: any) => {
  const {
    getQuizListItem,
    listQuiz: { loading, questions },
  } = props;

  const startTrivia = (difficulty: string) => {
    getQuizListItem(difficulty, numberOfQuiz, typeOfQuiz);
  };

  return (
    <Container>
      {questions.length === 0 && !loading && (
        <Cards>
          {difficulties.map((difficulty, index) => {
            return (
              <CardItem key={index}>
                <p>
                  Quiz:
                  {difficulty}
                </p>
                <button className="start" onClick={() => startTrivia(difficulty)}>
                  start
                </button>
              </CardItem>
            );
          })}
        </Cards>
      )}
    </Container>
  );
};
const mapStateToProps = (state: Store) => {
  return {
    listQuiz: state.questions,
  };
};
export default connect(mapStateToProps, { getQuizListItem })(DifficultyCard);
