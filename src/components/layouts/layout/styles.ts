/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const layoutStyle = css({
  position: 'relative',
  display: 'flex',
  flexFlow: 'column wrap',
  '& > div': { minHeight: '100vh' },
});

const pageUpButtonWrapperStyles = css({
  position: 'sticky',
  marginLeft: '95%',
  width: '50px',
  height: '50px',
  bottom: '30px',
  marginBottom: '10px',
  right: '50px',
  transform: 'rotate(270deg)',
});

const styles = { layoutStyle, pageUpButtonWrapperStyles };

export default styles;
