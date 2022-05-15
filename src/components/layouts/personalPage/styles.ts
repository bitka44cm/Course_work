/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import facepaint from 'facepaint';
import { breakpoints } from '../../common/rootStyles/styles';

const mq = facepaint(breakpoints.map((bp) => `@media (min-width: ${bp}px)`));

const outerBoxStyle = css(
  mq({
    display: 'flex',
    flexDirection: 'column',
    padding: ['50px 20px', '50px 50px', '50px 100px 50px'],
    alignItems: 'center',
    justifyContent: 'space-between',
  }),
);

const outerBoxStyleSecond = css(
  mq({
    display: 'flex',
    padding: ['50px 20px', '50px 50px', '50px 100px 50px'],
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'column',
  }),
);

const textFieldsDivStyle = css({
  width: '45%',
  alignItems: 'center',
});

const textFieldsDivStyleSecond = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
});

const textFieldDivStyle = css({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
  right: '80px',
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

const wrapperStyles = css(
  mq({
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    padding: '1rem',
  }),
);

const pStyle = css({
  textAlign: 'right',
  minWidth: '150px',
  width: '150px',
  marginRight: '10px',
});

const startStyle = css({
  alignSelf: 'flex-start',
});

const imgStyle = css({
  display: 'block',
  width: '15vw',
  height: '15vw',
  borderRadius: '50%',
  lineHeight: '150px',
  textAlign: 'center',
  opacity: '1',
  transition: '.5s ease',
  backfaceVisibility: 'hidden',
  objectFit: 'cover',
});

const formStyle = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  alignItems: 'flex-start',
});

const saveButtonStyle = css({
  width: '100%',
});

const saveButtonBoxStyle = css({
  marginTop: '35px',
  width: '70%',
  alignSelf: 'center',
});

const editButtonStyle = css({
  width: '100%',
  height: '100%',
  borderRadius: '50%',
});

const editButtonBoxStyle = css({
  width: '100%',
  height: '100%',
  alignSelf: 'center',
});

const flexBoxStyle = css({
  display: 'flex',
  width: '100%',
  justifyContent: 'space-between',
});

const modalFlexBoxStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const modalFlexBoxPadding = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '35px 0',
});

const emptyBoxStyle = css({
  width: '50%',
});

const closeButton = css({
  position: 'absolute',
  top: '30px',
  right: '30px',
});

const containerStyle = css({
  position: 'relative',
  '&:hover .image': {
    opacity: '0.3',
  },
  '&:hover .edit': {
    opacity: '1',
  },
});

const middleStyle = css({
  transition: '.5s ease',
  opacity: '0',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignSelf: 'center',
  width: '100%',
  height: '100%',
});

const styles = {
  flexStyle,
  outerBoxStyle,
  formStyle,
  textFieldsDivStyle,
  textFieldDivStyle,
  pStyle,
  startStyle,
  imgStyle,
  textFieldsDivStyleSecond,
  editButtonBoxStyle,
  outerBoxStyleSecond,
  saveButtonBoxStyle,
  saveButtonStyle,
  flexBoxStyle,
  emptyBoxStyle,
  wrapperStyles,
  modalFlexBoxStyle,
  modalFlexBoxPadding,
  closeButton,
  editButtonStyle,
  containerStyle,
  middleStyle,
};

export default styles;
