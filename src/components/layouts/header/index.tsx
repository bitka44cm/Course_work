/** @jsxImportSource @emotion/react */

import { AppBar, Box, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

import logo from '../../../assets/logo.png';
import { MAIN_PAGE_ROUTE } from '../../../constants/routeNames';
import styles from './styles';

interface HeaderProps {}

function Header(props: HeaderProps) {
  return (
    <AppBar color="secondary" position="sticky" css={styles.appBarStyles}>
      <Toolbar css={styles.toolBarStyles}>
        <Link to={MAIN_PAGE_ROUTE} css={styles.linkStyle}>
          <Box
            draggable="false"
            css={styles.imgBoxStyles}
            component="img"
            src={logo}
            alt="Sunmait logo"
          />
        </Link>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
