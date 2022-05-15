import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from '../../../common/rootStyles/styles';

const mq = facepaint(breakpoints.map((b) => `@media (min-width: ${b}px)`));

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
});

const flexColumnStyles = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const formStyles = css(
  mq({
    '& > *': {
      margin: '1rem 0 1rem 0',
      width: ['18rem', '22rem', '32rem', '42rem'],
    },
  }),
);
const styles = { modalStyles, flexColumnStyles, formStyles };
export default styles;
