/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { Splide } from '@splidejs/react-splide';
import { RootState } from '../../../../../redux/store';
import Slide from './slide';

import styles from './styles';

function Slider() {
  const usersComments = useSelector((state: RootState) => state.mainReducer.usersComments);
  const slide = usersComments.map((u) => {
    return (
      <Slide
        key={u.id}
        name={u.name}
        surname={u.surname}
        job={u.job}
        comment={u.comment}
        avatar={u.avatar}
      />
    );
  });
  return (
    <Box css={styles.slidesContainerStyle}>
      <Splide
        options={{
          type: 'loop',
          perPage: 3,
          perMove: 1,
          arrows: true,
          pagination: false,
          width: 800,
          gap: '50px',
        }}>
        {slide as any}
      </Splide>
    </Box>
  );
}

export default Slider;
