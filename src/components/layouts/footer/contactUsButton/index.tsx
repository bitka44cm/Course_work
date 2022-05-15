/** @jsxImportSource @emotion/react */

import { Button, Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { MAIN_PAGE_ROUTE } from '../../../../constants/routeNames';
import styles from './styles';

interface ContactUsProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
}

function ContactUs({ onClick }: ContactUsProps) {
  return (
    <Box>
      <Link to={MAIN_PAGE_ROUTE} css={styles.linkStyle}>
        <Button onClick={onClick} css={styles.contactButton}>
          Contact us
        </Button>
      </Link>
    </Box>
  );
}
export default ContactUs;
