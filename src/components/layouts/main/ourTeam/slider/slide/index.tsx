/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box } from '@mui/material';
import { SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/themes/splide-skyblue.min.css';
import styles from './styles';

interface TeamCardProps {
  name: string;
  surname: string;
  job: string;
  comment: string;
  avatar: string;
}

function Slide({ name, surname, job, comment, avatar }: TeamCardProps) {
  return (
    <SplideSlide>
      <Box>
        <Box css={styles.avatarImgStyle}>
          <img alt="teammate" src={avatar} />
        </Box>
        <Box css={styles.userInfoContainerStyle}>
          <Box css={styles.userInfoStyle}>
            <p css={styles.userInfoTextStyle}>{name}</p>
            <p css={styles.userInfoTextStyle}>{surname}</p>
          </Box>
          <Box css={styles.userJobStyle}>
            <p css={styles.userJobTextStyle}>{job}</p>
          </Box>
        </Box>
        <Box css={styles.userCommentContainerStyle}>
          <p>{comment}</p>
        </Box>
      </Box>
    </SplideSlide>
  );
}

export default Slide;
