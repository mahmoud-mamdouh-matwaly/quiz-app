import React from 'react';
import { connect } from 'react-redux';

// Types
import { Store } from '../../@types/store/state';
import { QuizListItem } from '../../@types/quiz';

// Actions
import { nextQuestion, setScore } from '../../redux/actions';

// Styles
import { Container, ButtonContainer } from './QuestionCard.styles';

type Props = {
  currentQuestion: QuizListItem;
  quizProgress: number;
  totalQuestions: number;
  answers: string[];
  nextQuestion: () => void;
  setScore: () => void;
};

const QuestionCard: React.FC<Props> = (props: any) => {
  const { quizProgress, totalQuestions, currentQuestion, answers, nextQuestion, setScore } = props;

  const handleClick = (answer: string) => {
    const correct = currentQuestion.correct_answer === answer;
    if (correct) {
      setScore();
    }
    nextQuestion();
  };

  return (
    <Container>
      <h2>
        Question: {quizProgress} / {totalQuestions}
      </h2>
      <p dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />

      {answers.map((answer) => (
        <ButtonContainer key={answer}>
          <button onClick={() => handleClick(answer)}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonContainer>
      ))}
    </Container>
  );
};

const mapStateToProps = (state: Store) => {
  return {
    totalQuestions: state.questions.questions.length,
    currentQuestion: state.questions.currentQuestion,
    quizProgress: state.questions.quizProgress,
    answers: state.questions.currentQuestion.answers,
  };
};

export default connect(mapStateToProps, { nextQuestion, setScore })(QuestionCard);
