/** @jsxImportSource @emotion/react */
import { MouseEvent } from 'react';

import { Divider, Fade, ListItemIcon, Menu, MenuItem, Typography } from '@mui/material';

import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/store';
import {
  employeeSettingsArray,
  managerSettingsArray,
  adminSettingsArray,
} from '../../../../../constants/buttons';
import { ROLES } from '../../../../../constants/roles';
import styles from './styles';

interface SettingsLinkProps {
  anchorElUser: HTMLElement | null;
  handleCloseUserMenu: () => void;
  handleClick: (e: MouseEvent<HTMLLIElement>) => Promise<void>;
}

function SettingsList({ anchorElUser, handleClick, handleCloseUserMenu }: SettingsLinkProps) {
  const role = useSelector((state: RootState) => state.userReducer.roles);
  return (
    <Menu
      css={styles.menuStyles}
      disableScrollLock
      id="user-menu"
      anchorEl={anchorElUser}
      open={Boolean(anchorElUser)}
      TransitionComponent={Fade}
      transitionDuration={300}
      PaperProps={{
        elevation: 0,
        sx: styles.innerPaperStyles,
      }}
      onClose={handleCloseUserMenu}>
      {role === ROLES.EMPLOYEE &&
        employeeSettingsArray.map((s) => (
          <div key={s.value}>
            {s.value === 'Logout' && <Divider />}
            <MenuItem key={s.value} data-action={s.action} data-path={s.path} onClick={handleClick}>
              {s.icon && <ListItemIcon>{s.icon}</ListItemIcon>}
              <Typography textAlign="center">{s.value}</Typography>
            </MenuItem>
          </div>
        ))}
      {role === ROLES.MANAGER &&
        managerSettingsArray.map((s) => (
          <div key={s.value}>
            {s.value === 'Logout' && <Divider />}
            <MenuItem key={s.value} data-action={s.action} data-path={s.path} onClick={handleClick}>
              {s.icon && <ListItemIcon>{s.icon}</ListItemIcon>}
              <Typography textAlign="center">{s.value}</Typography>
            </MenuItem>
          </div>
        ))}
      {role === ROLES.ADMIN &&
        adminSettingsArray.map((s) => (
          <div key={s.value}>
            {s.value === 'Logout' && <Divider />}
            <MenuItem key={s.value} data-action={s.action} data-path={s.path} onClick={handleClick}>
              {s.icon && <ListItemIcon>{s.icon}</ListItemIcon>}
              <Typography textAlign="center">{s.value}</Typography>
            </MenuItem>
          </div>
        ))}
    </Menu>
  );
}
export default SettingsList;
