/** @jsxImportSource @emotion/react */
import React from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Box, Toolbar } from '@mui/material';

import logo from '../../../assets/logo.png';
import ButtonsMenu from '../buttonsMenu';

import LanguageSelect from './languageSelect';
import ProfileMenu from './profileMenu';
import styles from './styles';
import { MAIN_PAGE_ROUTE } from '../../../constants/routeNames';

interface AuthHeaderProps {}

function AuthHeader(props: AuthHeaderProps) {
  return (
    <AppBar css={styles.appBarStyles} color="secondary" position="sticky">
      <Toolbar css={styles.toolBarStyles}>
        <Box css={styles.innerStyles}>
          <Link to={MAIN_PAGE_ROUTE} css={styles.linkStyle}>
            <Box css={styles.imgBoxStyles} component="img" src={logo} alt="Panda CLub logo" />
          </Link>
          <Box component="div" css={styles.navigationBox}>
            <ButtonsMenu />
          </Box>
        </Box>
        <LanguageSelect />
        <Box display="flex" flexDirection="column" justifyContent="space-between">
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default AuthHeader;
