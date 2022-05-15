/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box } from '@mui/material';
import styles from './styles';
import Slider from './slider';

function OurTeam() {
  return (
    <Box css={styles.ourTeamContainerStyle}>
      <Box css={styles.ourTeamHeaderStyle}>
        <h2>Meet our team</h2>
      </Box>
      <Slider />
    </Box>
  );
}

export default OurTeam;
