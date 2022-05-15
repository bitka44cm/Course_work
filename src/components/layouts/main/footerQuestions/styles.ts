import { css } from '@emotion/react';

const freqQuestionsContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  margin: '150px 0px',
  alignItems: 'center',
  height: '500px',
});

const freqQuestionsTitleContainerStyle = css({
  margin: '0px 100px',
  width: '300px',
  fontSize: '22px',
  color: 'gray',
  textTransform: 'uppercase',
  textAlign: 'center',
});

const questionsContainerStyle = css({
  borderTop: '2px solid #F2F2F2',
  display: 'flex',
  flexDirection: 'column',
  width: '600px',
});

const questionContainerStyle = css({
  '&:hover': {
    background: '#004ED7',
    transition: 'all 0.6s ease',
    cursor: 'pointer',
    color: '#fff',
  },
  '&:hover .questionText': {
    color: '#fff',
  },
  '&:hover .arrowIcon': {
    color: '#fff',
  },
  '& .MuiAccordionDetails-root': {
    padding: '0px',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '&:before': {
    display: 'none',
  },
  '& . MuiSvgIcon-root-FooterQuestions': {
    color: '#fff',
  },
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 50px',
  borderBottom: '2px solid #F2F2F2',
  position: 'relative',
  marginRight: '10px',
});

const questionActiveContainer = css({
  '& .MuiAccordionDetails-root': {
    padding: '0px',
  },
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  padding: '10px 50px',
  color: 'white',
  background: '#004ED7',
  borderBottom: '2px solid #F2F2F2',
  marginRight: '10px',
});

const questionHeaderContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const questionAnswerActiveContainerStyle = css({
  borderTop: '1px solid #fff',
  width: '100%',
  maxHeight: '300px',
});

const questionTextContainerStyle = css({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  fontSize: '14px',
});

const questionArrowStyles = css({
  color: '#000',
});

const questionActiveArrowStyles = css({
  color: '#fff',
});

const styles = {
  freqQuestionsContainerStyle,
  freqQuestionsTitleContainerStyle,
  questionsContainerStyle,
  questionContainerStyle,
  questionActiveContainer,
  questionHeaderContainerStyle,
  questionAnswerActiveContainerStyle,
  questionTextContainerStyle,
  questionArrowStyles,
  questionActiveArrowStyles,
};

export default styles;
