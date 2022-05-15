import { css } from '@emotion/react';

const contactUsFormWrapperStyle = css({
  width: '700px',
  margin: '40px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const contactUsInputsWrapperStyle = css({
  width: '600px',
  margin: '40px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const contactTextAreaStyle = css({
  '& textarea': {
    minHeight: '100px',
  },
});

const contactUsFormStyle = css({
  width: '100%',
});

const contactSelecContainerStyle = css({
  padding: '16px',
});

const contactButtonContainerStyle = css({
  padding: '16px',
});

const contactButtonStyle = css({
  width: '100%',
});

const phoneInputContainer = css({
  display: 'flex',
  padding: '15px',
});

const modalStyles = css({
  position: 'absolute',
  borderTop: '10px solid rgba(0, 77, 215, 1)',
  padding: '3rem',
  borderRadius: '8px',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  maxWidth: '48rem',
  backgroundColor: 'white',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const successImgWrapperStyle = css({
  margin: '20px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const successMessageWrapperStyle = css({
  '& p': {
    margin: '5px 0px',
  },
  fontWeight: 'bold',
  fontSize: '20px',
  margin: '20px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const closeButtonWrapperStyle = css({
  fontWeight: 'bold',
  fontSize: '20px',
  margin: '20px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: 'white',
});

const closeButtonStyle = css({
  background: '#F2F2F2',
  width: '100px',
});

const preloaderWrapperStyle = css({
  margin: '5px 0px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
});

const styles = {
  contactUsFormWrapperStyle,
  contactUsInputsWrapperStyle,
  contactUsFormStyle,
  contactSelecContainerStyle,
  contactButtonContainerStyle,
  contactButtonStyle,
  contactTextAreaStyle,
  phoneInputContainer,
  modalStyles,
  successImgWrapperStyle,
  successMessageWrapperStyle,
  closeButtonWrapperStyle,
  closeButtonStyle,
  preloaderWrapperStyle,
};

export default styles;
