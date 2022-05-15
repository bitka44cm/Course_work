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
});

const extrasMenuHeaderStyle = css({
  borderTop: '10px solid rgba(0, 77, 215, 1)',
  padding: '0.5rem 1rem 0',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  '& > *': {
    margin: '.5rem 1rem ',
  },
});

const formStyle = css({
  width: '100%',
  display: 'flex',
  flexFlow: 'row wrap',
  padding: '0px 20px 20px',
  borderRadius: '0.5em',
  '&>:nth-of-type(3)': {
    flex: '1 1 35rem',
  },
  '&>:last-of-type': {
    flex: '1 1 35rem',
  },
  '& > *': {
    flex: '1 1 15rem',
  },
});

const selectContainerStyle = css({
  padding: '1rem',
});

const styles = {
  closeButtonStyle,
  rejectButtonStyle,
  extrasMenuContainerStyle,
  extrasMenuHeaderStyle,
  formStyle,
  selectContainerStyle,
};

export default styles;
