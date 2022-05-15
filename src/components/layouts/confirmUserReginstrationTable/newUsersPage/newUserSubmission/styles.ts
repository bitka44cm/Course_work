import { css } from '@emotion/react';

const userInfoItemWrapperStyle = css({
  padding: '30px 0px',
});

const userInfoItemStyle = css({
  textAlign: 'left',
  padding: '15px',
});

const selectRoleContainerStyle = css({
  minWidth: '200px',
  marginRight: '50px',
});

const userRoleItemStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: '25px',
  position: 'relative',
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
  minHeight: '40%',
});

const extrasMenuFooterStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  margin: '10px 10px',
});

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

const userRoleForm = css({
  width: '70%',
  marginRight: '3rem',
  display: 'flex',
  paddingTop: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const selectRoleErrorStyle = css({
  position: 'absolute',
  top: '55px',
});

const formWrapper = css({
  display: 'flex',
  flexDirection: 'row',
});

const rejectedFormStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  paddingTop: '10px',
});

const confirmButtonPreloaderStyle = css({
  marginRight: '60px',
});

const styles = {
  userInfoItemWrapperStyle,
  userInfoItemStyle,
  selectRoleContainerStyle,
  userRoleItemStyle,
  warningStyles,
  extrasMenuContainerStyle,
  extrasMenuHeaderStyle,
  extrasMenuContentStyle,
  extrasMenuFooterStyle,
  closeButtonStyle,
  rejectButtonStyle,
  userRoleForm,
  selectRoleErrorStyle,
  formWrapper,
  rejectedFormStyle,
  confirmButtonPreloaderStyle,
};

export default styles;
