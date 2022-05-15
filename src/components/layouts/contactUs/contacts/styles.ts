import { css } from '@emotion/react';

const contactsWrapperStyle = css({
  margin: '60px 0px',
  display: 'flex',
  flexDirection: 'column',
});

const contactsStyle = css({
  display: 'flex',
  flexDirection: 'row',
});

const contactInfoContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '300px',
  margin: '20px',
});

const homeAddressContainerStyle = css({
  textAlign: 'left',
});

const emailContainerStyle = css({
  textAlign: 'center',
});

const phoneContainerStyle = css({
  textAlign: 'right',
});

const socialIconsContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: '40px',
});

const socialIconContainerStyle = css({
  margin: '0px 30px',
});

const socialIconStyle = css({
  '&:hover': {
    fill: '#004ED7',
    transition: 'all 0.2s ease',
  },
  fill: '#000',
  transition: 'all 0.2s ease',
});

const styles = {
  contactsWrapperStyle,
  contactsStyle,
  contactInfoContainerStyle,
  homeAddressContainerStyle,
  emailContainerStyle,
  phoneContainerStyle,
  socialIconsContainerStyle,
  socialIconContainerStyle,
  socialIconStyle,
};

export default styles;
