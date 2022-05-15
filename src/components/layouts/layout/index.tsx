/** @jsxImportSource @emotion/react */
import React, { ReactNode, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Box, CssBaseline, IconButton, ThemeProvider } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Footer from '../footer';
import Header from '../header';
// import AuthHeader from '../authHeader';
import { useEnhancedNavigate } from '../../../utils/hooks/useEnhancedNavigate';
import { RootState } from '../../../redux/store';
import { theme } from './theme';

import styles from './styles';
import AuthHeader from '../authHeader';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  const [showButton, setShowButton] = useState(false);

  const { scrollNavigate } = useEnhancedNavigate();

  const WINDOW_SIZE = 100;

  const windowHandler = () => {
    if (window.pageYOffset > WINDOW_SIZE) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    let cleanupFunction = false;
    if (!cleanupFunction) {
      window.addEventListener('scroll', windowHandler);
    }
    return () => {
      window.removeEventListener('scroll', windowHandler);
      cleanupFunction = true;
    };
  }, []);

  const { isAuthenticated } = useSelector((store: RootState) => store.userReducer);

  const pageUpHandler = () => {
    scrollNavigate({ top: 0, left: 0 });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box css={styles.layoutStyle}>
        {isAuthenticated ? <AuthHeader /> : <Header />}
        {children}
        {showButton && (
          <IconButton onClick={pageUpHandler} css={styles.pageUpButtonWrapperStyles}>
            <ArrowForwardIosIcon />
          </IconButton>
        )}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
export default Layout;
