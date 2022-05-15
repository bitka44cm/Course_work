import { css } from '@emotion/react';

const wrapperStyles = css({
  display: 'flex',
  padding: '0.4rem',
  flexGrow: '1',
});

const fullNameWrapperStyles = css({
  '& p': {
    margin: '0px 2px 0 0',
  },
  display: 'flex',
  justifyContent: 'flex-end',
  minWidth: '10rem',
  '&:hover': {
    color: 'grey',
    cursor: 'pointer',
  },
});

const styles = { wrapperStyles, fullNameWrapperStyles };

export default styles;
