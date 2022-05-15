import { css } from '@emotion/react';

const wrapperStyles = css({
  width: '100%',
  display: 'flex',
  flexFlow: 'column wrap',
  padding: '1rem',
});

const errorsStyles = css({
  color: 'red',
});

const inputStyle = css({
  width: '100%',
  height: '45px',
  fontSize: '16px',
  paddingLeft: '48px',
  borderRadius: '5px',
});

const buttonStyle = css({
  borderRadius: '5px 0 0 5px',
});

const dropdownStyle = css({
  width: '300px',
});

const styles = {
  wrapperStyles,
  errorsStyles,
  inputStyle,
  buttonStyle,
  dropdownStyle,
};
export default styles;
