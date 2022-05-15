import React from 'react';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import {
  SIGN_IN_ROUTE,
  CONTACT_ROUTE,
  DATABASE_ROUTE,
  REGISTRATION_REQUESTS_ROUTE,
  USER_PROFILE_ROUTE,
} from './routeNames';

export type ButtonsProps = {
  value: string;
  path: string;
  action?: string;
  icon?: React.ReactNode;
};

// Actions
export const BUTTON_LOGOUT_ACTION = 'LOGOUT';
export const BUTTON_SCROLL_TO_THE_TOP_ACTION = 'SCROLL_TOP';

//

export const buttonsArray: ButtonsProps[] = [
  { value: 'Base', path: DATABASE_ROUTE, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
  { value: 'Contact', path: CONTACT_ROUTE, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
];
export const managerButtonsArray: ButtonsProps[] = [
  { value: 'Base', path: DATABASE_ROUTE, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
  { value: 'Contact', path: CONTACT_ROUTE, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
];

export const adminButtonsArray: ButtonsProps[] = [
  { value: 'Requests', path: REGISTRATION_REQUESTS_ROUTE, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
  { value: 'Base', path: DATABASE_ROUTE, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
  { value: 'Contact', path: CONTACT_ROUTE, action: BUTTON_SCROLL_TO_THE_TOP_ACTION },
];

// Settings dropdown

export const employeeSettingsArray: ButtonsProps[] = [
  {
    value: 'Profile',
    path: USER_PROFILE_ROUTE,
    action: BUTTON_SCROLL_TO_THE_TOP_ACTION,
    icon: <AccountBoxIcon />,
  },
  { value: 'Logout', path: SIGN_IN_ROUTE, action: BUTTON_LOGOUT_ACTION, icon: <LogoutIcon /> },
];

export const managerSettingsArray: ButtonsProps[] = [
  {
    value: 'Profile',
    path: USER_PROFILE_ROUTE,
    action: BUTTON_SCROLL_TO_THE_TOP_ACTION,
    icon: <AccountBoxIcon />,
  },
  { value: 'Logout', path: SIGN_IN_ROUTE, action: BUTTON_LOGOUT_ACTION, icon: <LogoutIcon /> },
];

export const adminSettingsArray: ButtonsProps[] = [
  {
    value: 'Profile',
    path: USER_PROFILE_ROUTE,
    action: BUTTON_SCROLL_TO_THE_TOP_ACTION,
    icon: <AccountBoxIcon />,
  },
  { value: 'Logout', path: SIGN_IN_ROUTE, action: BUTTON_LOGOUT_ACTION, icon: <LogoutIcon /> },
];
