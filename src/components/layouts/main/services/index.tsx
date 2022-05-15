/** @jsxImportSource @emotion/react */
import React from 'react';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { RootState } from '../../../../redux/store';
import styles from './styles';

function Services() {
  const services = useSelector((state: RootState) => state.mainReducer.services);
  return (
    <Box css={styles.servicesContainerStyle}>
      <Box css={styles.servicesStyle}>
        {services.map((s) => {
          return (
            <Box key={s.id} css={styles.serviceItemStyle}>
              <Box css={styles.serviceTitleContainerStyle}>
                <Box css={styles.serviceIconContainer}>
                  <div css={styles.roundStyle} className="round" />
                  <img
                    css={styles.serviceIconStyle}
                    src="https://img.icons8.com/fluency-systems-regular/48/000000/full-moon.png"
                    alt=""
                  />
                </Box>
                <Box>
                  <h3 css={styles.serviceTitleTextStyle}>{s.title}</h3>
                </Box>
              </Box>
              <Box css={styles.serviceTextContainerStyle} className="serviceText">
                <p>{s.description}</p>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box css={styles.servicesDescriptionContainerStyle}>
        <Box css={styles.servicesDescriptionTitleContainerStyle}>
          <h3>Title Text</h3>
        </Box>
        <Box css={styles.servicesDescriptionTextContainerStyle}>
          <p>text text text text text text text text text text text text text text text text</p>
        </Box>
      </Box>
    </Box>
  );
}

export default Services;
