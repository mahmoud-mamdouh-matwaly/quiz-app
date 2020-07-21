import React from 'react';
import { connect } from 'react-redux';

// Types
import { Store, QuizInitialState } from '../../@types/store/state';

// Styles
import { Container } from './Dashboard.styles';

// core component
import SocialMediaShare from '../socialMediaShare';

type Props = {
  listQuiz: QuizInitialState;
};

const Dashboard: React.FC<Props> = (props: any) => {
  const {
    listQuiz: { questions, score },
  } = props;

  return (
    <Container>
      <div>
        <h3>You Scored: {(score / questions.length) * 100}%</h3>

        <p>The average score for this quiz was: 50%</p>

        {score / questions.length >= 0.5 ? (
          <p style={{ color: '#6AC259' }}>
            {`Passed you answered ${score} of ${questions.length}`}
          </p>
        ) : (
          <p style={{ color: '#ef5845' }}>
            {`Failed you answered ${score} of ${questions.length}`}
          </p>
        )}

        <SocialMediaShare />
      </div>
    </Container>
  );
};
const mapStateToProps = (state: Store) => {
  return {
    listQuiz: state.questions,
    score: state.questions.score,
  };
};
export default connect(mapStateToProps)(Dashboard);
