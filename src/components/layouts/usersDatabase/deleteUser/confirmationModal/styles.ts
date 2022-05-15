import { css } from '@emotion/react';

const closeButtonStyle = css({
  height: '35px',
  width: '100px',
  textTransform: 'none',
});

const rejectButtonStyle = css({
  height: '35px',
  width: '100px',
  marginRight: '10px',
  textTransform: 'none',
});
const extrasMenuContainerStyle = css({
  zIndex: 5,
  background: '#fff',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  minWidth: '30rem',
  height: '15rem',
});

const extrasMenuHeaderStyle = css({
  borderTop: '10px solid rgba(0, 77, 215, 1)',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '& > *': {
    margin: '.5rem 1rem ',
  },
});
const warningStyles = css({
  verticalAlign: 'middle',
  display: 'inline-flex',
});

const extrasMenuContentStyle = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '30px',
  minHeight: '40%',
});

const extrasMenuFooterStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  margin: '10px 10px',
});
const rejectedFormStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '10px',
});

const styles = {
  closeButtonStyle,
  rejectButtonStyle,
  extrasMenuContainerStyle,
  extrasMenuHeaderStyle,
  warningStyles,
  extrasMenuContentStyle,
  extrasMenuFooterStyle,
  rejectedFormStyle,
};

export default styles;
