import { css } from '@emotion/react';

const servicesContainerStyle = css({
  margin: '100px 0px',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
});

const servicesStyle = css({
  padding: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  width: '60%',
});

const serviceItemStyle = css({
  '&: hover': {
    backgroundColor: '#004ED7',
    color: '#fff',
  },
  '&: hover .round': {
    width: '25px',
    height: '25px',
    background: '#fff',
  },
  '&: hover .serviceText': {
    opacity: '1',
  },
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid rgba(226, 221, 221, 0.795)',
  cursor: 'pointer',
  width: '350px',
  height: '180px',
  borderRadius: '3px',
  margin: '10px 20px',
  padding: '10px',
  transition: 'all 0.3s',
});

const serviceTitleContainerStyle = css({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '270px',
  height: '50px',
  padding: '50px 30px 0px 40px',
});

const serviceIconContainer = css({
  position: 'relative',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  marginRight: '30px',
});

const roundStyle = css({
  position: 'absolute',
  zIndex: '1',
  left: '12px',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  background: '#004ED7',
  transition: 'all 0.3s',
});

const serviceIconStyle = css({
  width: '20px',
  height: '20px',
  zIndex: '2',
});

const serviceTitleTextStyle = css({
  margin: '0',
  textTransform: 'uppercase',
});

const serviceTextContainerStyle = css({
  opacity: '0',
  padding: '15px 40px',
  transition: 'opacity 0.3s',
});

const servicesDescriptionContainerStyle = css({
  padding: '20px',
  display: 'flex',
  flexDirection: 'column',
  width: '270px',
});

const servicesDescriptionTitleContainerStyle = css({
  '& h3': {
    margin: '10px 0px',
  },
  textTransform: 'uppercase',
  color: '#004ED7',
  fontSize: '20px',
});

const servicesDescriptionTextContainerStyle = css({
  '& p': {
    margin: ' 0px',
  },
  color: 'gray',
  fontSize: '15px',
});

const styles = {
  servicesContainerStyle,
  servicesStyle,
  serviceItemStyle,
  serviceTitleContainerStyle,
  serviceIconContainer,
  roundStyle,
  serviceIconStyle,
  serviceTitleTextStyle,
  serviceTextContainerStyle,
  servicesDescriptionContainerStyle,
  servicesDescriptionTitleContainerStyle,
  servicesDescriptionTextContainerStyle,
};

export default styles;
