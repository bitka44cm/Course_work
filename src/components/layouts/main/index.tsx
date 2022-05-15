/** @jsxImportSource @emotion/react */
import React from 'react';

import { Box } from '@mui/material';

import FooterQuestions from './footerQuestions';
import OurTeam from './ourTeam';
import Services from './services';
import styles from './styles';

interface HomeProps {}

function MainLayout(props: HomeProps) {
  return (
    <Box css={styles.wrapperStyle}>
      <Box css={styles.welcomeContainerStyle}>
        <Box css={styles.welcomeTextStyle} className="welcomeText">
          <h2 css={styles.welcomeTextTitleStyle}>Welcome to the main page!</h2>
        </Box>
      </Box>
      <Services />
      <OurTeam />
      <FooterQuestions />
    </Box>
  );
}

export default MainLayout;
