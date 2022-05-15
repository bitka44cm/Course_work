/* eslint-disable react/react-in-jsx-scope -- Unaware of jsxImportSource */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const wrapperStyles = css({
  width: '100%',
  display: 'flex',
  flexFlow: 'column wrap',
  padding: '1rem',
});

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
