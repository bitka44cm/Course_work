/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// eslint-disable-next-line import/no-named-default
import { default as rootStyles } from '../../common/rootStyles/styles';

const { colors } = rootStyles;

const emailCell = css({
  maxWidth: '250px',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  padding: '16px',
  '&> span:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

const nameCell = css({
  padding: '16px',
  'span:hover': {
    cursor: 'pointer',
    textDecoration: 'underline',
  },
});

const tableStyle = css({
  minHeight: 600,
  width: '100%',
});

const managersCell = css({
  '&> span': {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    maxWidth: '200px',
  },
});

const containerStyles = css({
  marginTop: '3rem',
  marginBottom: '3rem',
});

const dataBaseHeaderStyles = css({
  h2: {
    margin: '0px',
    width: '170px',
  },
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: '20px',
});

const dataBaseHeaderButtonsWrapperStyles = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginLeft: '20px',
  width: '100%',
  alignItems: 'center',
});

const filterButtonsWrapperStyles = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const tabBtn = css({
  width: '100px',
  padding: '5px',
  textTransform: 'capitalize',
  ':disabled': {
    color: colors.mainDark,
    backgroundColor: colors.lightGray,
  },
  border: `1px solid ${colors.lightGray}`,
  borderRadius: '4px',
  margin: '0px 10px',
});

const styles = {
  emailCell,
  tableStyle,
  managersCell,
  containerStyles,
  dataBaseHeaderStyles,
  dataBaseHeaderButtonsWrapperStyles,
  filterButtonsWrapperStyles,
  tabBtn,
  nameCell,
};
export default styles;
