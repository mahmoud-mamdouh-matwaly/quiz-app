import React from 'react';
import { connect } from 'react-redux';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

import { Store, QuizInitialState } from '../../@types/store/state';

type Props = {
  listQuiz: QuizInitialState;
};

const SocialMediaShare: React.FC<Props> = (props: any) => {
  const {
    listQuiz: { questions, score },
  } = props;

  return (
    <>
      <TwitterShareButton
        url="https://opentdb.com/api_config.php"
        title={`You Scored: ${(score / questions.length) * 100}%`}
      >
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton
        url="https://opentdb.com/api_config.php"
        quote={`You Scored: ${(score / questions.length) * 100}%`}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </>
  );
};
const mapStateToProps = (state: Store) => {
  return {
    listQuiz: state.questions,
    score: state.questions.score,
  };
};
export default connect(mapStateToProps)(SocialMediaShare);
