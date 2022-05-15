/** @jsxImportSource @emotion/react */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Avatar, Box, IconButton, Tooltip, Typography } from '@mui/material';
import noUser from '../../../../assets/no-user.jpeg';

import { RootState } from '../../../../redux/store';
import SettingsList from './settingsList';
import styles from './styles';
import { BUTTON_LOGOUT_ACTION } from '../../../../constants/buttons';
import { logout } from '../../../../redux/slices/user';

interface ProfileMenuProps {}

function ProfileMenu(props: ProfileMenuProps) {
  const { name, surname } = useSelector((store: RootState) => store.userReducer);

  const fullName = `${name} ${surname}`;

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [settingsDropdown, setSettingsDropdown] = React.useState<null | HTMLElement>(null);

  const handleCloseUserMenu = () => {
    setSettingsDropdown(null);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setSettingsDropdown(event.currentTarget);
  };
  const handleClick = async (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const { path, action } = e.currentTarget.dataset;
    setSettingsDropdown(null);
    if (path) {
      if (action && action === BUTTON_LOGOUT_ACTION) {
        console.log('123');
        dispatch(logout());
      }
      navigate(path);
    }
  };

  return (
    <Box css={styles.wrapperStyles}>
      <Tooltip title="Open profile">
        <Box onClick={handleOpenUserMenu}>
          <Box component="div" display="flex" alignItems="center">
            <Box css={styles.fullNameWrapperStyles}>
              <Box mr={2} display="flex">
                <Typography noWrap>{fullName}</Typography>
              </Box>
            </Box>
            <IconButton sx={{ p: 0 }}>
              <Avatar alt={fullName} src={noUser} />
            </IconButton>
          </Box>
        </Box>
      </Tooltip>
      <SettingsList
        anchorElUser={settingsDropdown}
        handleCloseUserMenu={handleCloseUserMenu}
        handleClick={handleClick}
      />
    </Box>
  );
}
export default ProfileMenu;
