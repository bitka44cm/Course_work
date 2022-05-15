/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const contactButton = css({
  minHeight: '2rem',
  minWidth: '9rem',
  borderRadius: '30px',
  border: '1px solid #004ED7',
  animationDuration: '0.5s',
  '&:hover': {
    backgroundColor: '#004ED7',
    color: 'white',
  },
});

const linkStyle = css({
  textDecoration: 'none',
});

const styles = { contactButton, linkStyle };
export default styles;
