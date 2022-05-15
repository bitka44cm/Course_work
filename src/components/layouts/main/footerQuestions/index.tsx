/** @jsxImportSource @emotion/react */
import React, { useEffect } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useEnhancedNavigate } from '../../../../utils/hooks/useEnhancedNavigate';
import { MAIN_PAGE_ROUTE } from '../../../../constants/routeNames';

import styles from './styles';

function FooterQuestions() {
  const [expanded, setExpanded] = React.useState('');

  const { scrollNavigate } = useEnhancedNavigate();

  useEffect(() => {
    scrollNavigate({ top: 0, left: 0, path: MAIN_PAGE_ROUTE });
  }, []);

  const usersQuestions = useSelector((state: RootState) => state.mainReducer.usersQuestions);

  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box css={styles.freqQuestionsContainerStyle}>
      <Box css={styles.freqQuestionsTitleContainerStyle}>
        <h2>Frequently asked question</h2>
      </Box>
      <Box css={styles.questionsContainerStyle} className="questionsContainerStyle">
        {usersQuestions.map((q, index) => {
          return (
            <Accordion
              disableGutters
              elevation={0}
              square
              key={q.id}
              data-testid="main_freq-question"
              expanded={expanded === `panel${index}`}
              css={
                expanded === `panel${index}`
                  ? styles.questionActiveContainer
                  : styles.questionContainerStyle
              }
              onChange={handleChange(`panel${index}`)}>
              <AccordionSummary
                css={styles.questionHeaderContainerStyle}
                expandIcon={
                  <ArrowDownwardIcon
                    css={
                      expanded === `panel${index}`
                        ? styles.questionActiveArrowStyles
                        : styles.questionArrowStyles
                    }
                    className="arrowIcon"
                  />
                }>
                <Box css={styles.questionTextContainerStyle}>
                  <p className="questionText"> {q.question}</p>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
                <Box css={styles.questionAnswerActiveContainerStyle}>
                  <p className="questionText">{q.answer}</p>
                </Box>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>
    </Box>
  );
}

export default FooterQuestions;
