import { css } from '@emotion/react';

const paperStyles = css({
  '& > *': { padding: 0 },
  marginTop: '1.5rem',
});
const tabPanelStyles = css({
  padding: 0,
});
const containerStyles = css({
  marginTop: '3rem',
  marginBottom: '3rem',
});
const styles = { paperStyles, tabPanelStyles, containerStyles };
export default styles;
