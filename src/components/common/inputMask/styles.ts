/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from '../rootStyles/styles';

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const wrapperStyles = css(
  mq({
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '1rem',
    height: '72px',
  }),
);

const paragraphErrorStyles = css({
  color: 'red',
});

const inputWidthStyle = css({
  width: '75%',
});

const textFieldStyles = css({
  fontFamily: 'Lato, sans-serif',
  width: '100%',
  '& label.Mui-focused': {
    color: '#004DE7',
  },
  '& .Mui-focused:after': {
    borderBottomColor: '#004DE7',
  },
});

const styles = {
  paragraphErrorStyles,
  wrapperStyles,
  inputWidthStyle,
  textFieldStyles,
};

export default styles;
