import { css } from '@emotion/react';
import welcomeImg from '../../../assets/contactUs.jpg';

const wrapperStyle = css({
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

const welcomeContainerStyle = css({
  '&: hover': {
    backgroundSize: '100% ',
  },
  '&: hover .welcomeText': {
    opacity: '1',
    backgroundColor: 'rgba(0, 0, 0, 0.288)',
  },
  width: '100%',
  height: '600px',
  backgroundImage: `url(${welcomeImg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '120%',
  backgroundPositionX: '50%',
  backgroundPositionY: '55%',
  cursor: 'pointer',
  overflow: 'hidden',
  transition: 'background-size .5s ease-in',
});

const welcomeTextStyle = css({
  opacity: '0',
  width: '100%',
  height: '100%',
  fontSize: '40px',
  color: '#fff',
  textTransform: 'uppercase',
  transition: 'all 0.4s ease-in-out',
});

const welcomeTextTitleStyle = css({
  margin: '0',
  padding: '250px 0px 0px 70px',
});

const mapsContainerStyle = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  overflow: 'hidden',
});

const mapsTitleContainerStyle = css({
  fontSize: '18px',
  margin: '30px 0px',
});

const mapsStyle = css({
  border: 'none',
  margin: '0',
  padding: '0',
});

const styles = {
  wrapperStyle,
  welcomeContainerStyle,
  welcomeTextStyle,
  welcomeTextTitleStyle,
  mapsContainerStyle,
  mapsTitleContainerStyle,
  mapsStyle,
};

export default styles;
