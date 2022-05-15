/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const appBarStyles = css({
  '& header': {
    padding: '0px',
  },
  display: 'flex',
  maxHeight: '7.75rem',
  minWidth: '850px',
});

const toolBarStyles = css({
  display: 'flex',
  maxHeight: '7.75rem',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0.5rem 0.75rem 0.5rem 0.75rem',
});

const innerStyles = css({
  display: 'flex',
  width: '100vw',
  alignItems: 'center',
});

const navigationBox = css({
  display: 'flex',
  marginLeft: '1rem',

  '& button': {
    margin: '0 1rem 0 1rem',
  },
});

const imgBoxStyles = css({
  marginLeft: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxHeight: '3.75rem',
  maxWidth: '8.5rem',
  '&:hover': {
    cursor: 'pointer',
  },
});

const linkStyle = css({
  lineHeight: '0',
});
const styles = { imgBoxStyles, appBarStyles, toolBarStyles, navigationBox, innerStyles, linkStyle };

export default styles;
