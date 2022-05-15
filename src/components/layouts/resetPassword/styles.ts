/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from '../../common/rootStyles/styles';
// eslint-disable-next-line no-unused-vars
const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const outerBoxStyle = css({
  display: 'flex',
  height: '100vh',
});

const flexStyle = css(
  mq({
    display: 'flex',
    padding: '25px',
    flexDirection: 'column',
    margin: 'auto',
    alignItems: 'center',
    width: ['100%', '80%', '60%', '45%'],
  }),
);

const h1Style = css({
  bottom: '2rem',
  padding: '0.5rem',
  textAlign: 'center',
  fontWeight: '900',
  fontSize: '40px',
  fontFamily: 'Lato, sans-serif',
  '&:after': {
    content: '""',
    display: 'block',
    border: '2px solid #004ED7',
    backgroundColor: '#004DE7',
    margin: '30px auto 10px',
    width: '66%',
    textAlign: 'center',
  },
});

const formStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  padding: '50px 20px 40px',
  borderRadius: '0.5em',
  borderTop: '10px solid rgba(0, 77, 215, 1)',
  boxShadow: '1px 1px 10px grey, -1px 0px 10px grey',
});

const parentBtnStyleDiv = css({
  width: '100%',
  padding: '1rem 1rem 0rem 1rem',
});

const resetBtnStyle = css({
  height: '40px',
  width: '100%',
  marginBottom: '15px',
});

const toLoginPageStyle = css({
  height: '40px',
  border: 'none',
  width: '100%',
  marginBottom: '20px',
});

const modalMessageStyle = css({
  fontFamily: 'Lato, sans-serif',
  fontSize: '18px',
});

const linkStyle = css({
  textDecoration: 'none',
  width: '100%',
});

const styles = {
  flexStyle,
  outerBoxStyle,
  h1Style,
  formStyle,
  resetBtnStyle,
  parentBtnStyleDiv,
  toLoginPageStyle,
  modalMessageStyle,
  linkStyle,
};

export default styles;
