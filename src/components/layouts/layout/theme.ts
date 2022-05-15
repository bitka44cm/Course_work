/* eslint-disable no-unused-vars */
import { createTheme } from '@mui/material';
import rootStyles from '../../common/rootStyles/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: rootStyles.colors.mainBlue,
    },
    secondary: {
      main: rootStyles.colors.mainGray,
    },
    dark: {
      main: rootStyles.colors.eerieBlack,
    },
    neutral: {
      main: rootStyles.colors.cultured,
    },
  },
});

declare module '@mui/material/styles' {
  interface Palette {
    dark: Palette['primary'];
    neutral: Palette['primary'];
  }

  // Allow configuration using `createTheme`
  interface PaletteOptions {
    dark: PaletteOptions['primary'];
    neutral: PaletteOptions['primary'];
  }
}

// Update Component's color prop options

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
    dark: true;
  }
}
declare module '@mui/material/Link' {
  interface LinkPropsColorOverrides {
    neutral: true;
    dark: true;
  }
}

declare module '@mui/material/Box' {
  interface BoxPropsColorOverrides {
    neutral: true;
    dark: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    neutral: true;
    dark: true;
  }
}
//
