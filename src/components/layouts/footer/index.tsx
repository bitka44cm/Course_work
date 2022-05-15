/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Container, IconButton, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import ContactUsButton from './contactUsButton';

import Logo from '../../../assets/logo.png';
import { MAIN_PAGE_ROUTE } from '../../../constants/routeNames';
import { useEnhancedNavigate } from '../../../utils/hooks/useEnhancedNavigate';
import styles from './styles';
import { RootState } from '../../../redux/store';

function CopyrightLogo() {
  const { scrollNavigate } = useEnhancedNavigate();

  const returnHandler = (e: React.MouseEvent<HTMLDivElement>) =>
    scrollNavigate({ top: 0, left: 0, path: MAIN_PAGE_ROUTE, behavior: 'smooth' });

  return (
    <Box css={styles.flexColumn}>
      <Box onClick={returnHandler} component="img" src={Logo} css={styles.imgBoxStyles} />
      <Typography css={styles.copyrightTypographyStyles} color="neutral.main" variant="caption">
        {'Copyright © '}
        Panda Club {`${new Date().getFullYear()}.`}
      </Typography>
    </Box>
  );
}

function Footer() {
  const handleScrollTop = (e: React.MouseEvent) =>
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  const { isAuthenticated } = useSelector((store: RootState) => store.userReducer);
  const handleContactUs = (e: React.MouseEvent<HTMLButtonElement>) => {
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: 'smooth' });
  };

  return (
    <Box bgcolor="dark.main" css={styles.footerStyles} component="footer">
      <CopyrightLogo />
      <Box css={styles.mottoStyles} display={{ xs: 'none', sm: 'none', md: 'none', lg: 'flex' }}>
        <Typography variant="body2" color="neutral.main">
          We love building awesome apps
        </Typography>
        <Typography variant="body2" color="neutral.main">
          Creating beautiful, usable products engineered to perform
        </Typography>
      </Box>
      <Container maxWidth="sm">
        <Box css={styles.contactsInfoWrapperStyles}>
          {isAuthenticated && (
            <Box>
              <Typography
                color="neutral.main"
                component={RouterLink}
                to={MAIN_PAGE_ROUTE}
                onClick={handleScrollTop}
                css={styles.hoverableTypography}>
                Contacts
              </Typography>
            </Box>
          )}
          <Box ml={10}>
            <Typography color="neutral.main">Social Media</Typography>
          </Box>
          <Box css={styles.socialIconsWrapperStyles}>
            <Box display="flex" justifyContent="space-around">
              <Box mr={3} ml={3}>
                <IconButton>
                  <LinkedIn css={styles.iconStyles} color="secondary" />
                </IconButton>
              </Box>
              <Box mr={3} ml={3}>
                <IconButton>
                  <Facebook css={styles.iconStyles} color="secondary" />
                </IconButton>
              </Box>
              <Box mr={3} ml={3}>
                <IconButton>
                  <Twitter css={styles.iconStyles} color="secondary" />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      {isAuthenticated && (
        <Box css={styles.contactUsButtonContainerStyles}>
          <ContactUsButton onClick={handleContactUs} />
        </Box>
      )}
    </Box>
  );
}
export default Footer;
