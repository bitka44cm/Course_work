/** @jsxImportSource @emotion/react */

import React from 'react';

import { Box } from '@mui/material';

import Contacts from './contacts';
import ContactUsForm from './contactUsForm';
import styles from './styles';

interface HomeProps {}

function ContactUsLayout(props: HomeProps) {
  return (
    <Box css={styles.wrapperStyle}>
      <Box css={styles.welcomeContainerStyle}>
        <Box css={styles.welcomeTextStyle} className="welcomeText">
          <h2 css={styles.welcomeTextTitleStyle}>Contact US!</h2>
        </Box>
      </Box>
      <Contacts />
      <Box css={styles.mapsContainerStyle}>
        <Box css={styles.mapsTitleContainerStyle}>
          <h2>Where we are?</h2>
        </Box>
        <Box width="85vw" height="40vh">
          <iframe
            data-testid="contacts_map"
            css={styles.mapsStyle}
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d771.5766690526826!2d27.546712160279057!3d53.89390940294586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfe79c5d5f91%3A0x4a6f20abe71d30b!2z0JPQu9Cw0LLQvdGL0Lkg0JrQvtGA0L_Rg9GBINCR0JPQow!5e0!3m2!1sru!2sby!4v1652135257918!5m2!1sru!2sby"
            width="100%"
            height="100%"
          />
        </Box>
      </Box>
      <ContactUsForm />
    </Box>
  );
}

export default ContactUsLayout;
