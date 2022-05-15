/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const menuStyles = css({
  color: 'text.primary',
  position: 'relative',

  '&:before': {
    content: "''",
    position: 'absolute',
    width: '0',
    height: '2px',
    bottom: '-3px',
    left: '50%',
    transform: 'translate(-50%,0%)',
    backgroundColor: '#004ED7',
    visibility: 'hidden',
    transition: 'all 0.3s ease-in-out',
  },
  '&:hover': {
    opacity: '0.8',
  },
  '&:hover:before': {
    visibility: 'visible',
    color: '#004ED7',
    width: '100%',
  },
});

const linkStyle = css({
  textDecoration: 'none',
  lineHeight: '2',
  color: '#004ED7',
});

const boxStyle = css({
  minHeight: '28px',
});

const styles = { menuStyles, linkStyle, boxStyle };
export default styles;
