/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const modalStyle = css({
  position: 'fixed',
  top: '0',
  bottom: ' 0',
  left: ' 0',
  right: ' 0',
  width: ' 100%',
  zIndex: '2',
  display: ' flex',
  alignItems: ' center',
  justifyContent: 'center',
  backgroundColor: ' rgba(0, 0, 0, 0.7)',
  animationName: 'appear',
  animationDuration: ' 300ms',
});

const modalDialogStyle = css({
  width: '100%',
  maxWidth: ' 700px',
  background: ' white',
  position: 'relative',
  margin: '0 20px',
  maxHeight: 'calc(100vh - 40px)',
  textAlign: 'left',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  animationName: ' slide-in',
  animationDuration: '0.5s',
  borderRadius: '0.5em',
  borderTop: '4px solid #004DE7',
});

const modalBodyStyle = css({
  overflow: 'auto',
});

const modalContentStyle = css({
  padding: '1rem',
});

export const styles = {
  modalStyle,
  modalDialogStyle,
  modalBodyStyle,
  modalContentStyle,
};
