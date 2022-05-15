import { css } from '@emotion/react';

const slidesContainerStyle = css({
  '& .splide__arrow--next': {
    right: '-200px',
  },
  '& .splide__arrow--prev': {
    left: '-200px',
  },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '850px',
  background: '#F2F2F2',
  padding: '15px 30px',
});

const styles = {
  slidesContainerStyle,
};

export default styles;
