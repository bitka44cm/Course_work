import { css } from '@emotion/react';

const avatarImgStyle = css({
  '& img': {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  width: '250px',
  height: '300px',
  overflow: 'hidden',
  backgroundSize: 'contain',
});

const userInfoContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '100%',
});

const userInfoStyle = css({
  display: 'flex',
  flexDirection: 'row',
  fontWeight: 'bold',
});

const userInfoTextStyle = css({
  fontSize: '18px',
  margin: '0px 5px 0px 0px',
});

const userJobStyle = css({
  display: 'flex',
});

const userJobTextStyle = css({
  margin: '0',
  color: 'rgb(139, 139, 139)',
});

const userCommentContainerStyle = css({
  marginTop: '10px',
  fontSize: '14px',
  color: 'rgb(139, 139, 139)',
});

const styles = {
  avatarImgStyle,
  userInfoContainerStyle,
  userInfoStyle,
  userJobStyle,
  userInfoTextStyle,
  userJobTextStyle,
  userCommentContainerStyle,
};

export default styles;
