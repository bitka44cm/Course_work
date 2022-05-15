import React, { useState } from 'react';
import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import DeleteDialog from './confirmationModal/index';
import { CustomButton } from '../../../common';
import { snackActions } from '../../../../utils/helpers/snackBarUtils';
import { RootState } from '../../../../redux/store';
import { deleteUser } from '../../../../redux/slices/users';

interface DeleteUserProps {
  email: string;
  userName: string;
}

function DeleteUser({ email, userName }: DeleteUserProps) {
  const dispatch = useDispatch();
  const userEmail = useSelector((state: RootState) => state.userReducer.email);
  const [open, setOpen] = useState(false);
  const users = useSelector((state: RootState) => state.usersReducer);
  const searchUser = useSelector((state: RootState) =>
    state.usersReducer.find((user) => user.email === email),
  );
  const index = users.indexOf(searchUser as any);

  const deleteUserHandler = async () => {
    dispatch(deleteUser({ index }));
    snackActions.success('userHas been deleted!');
    setOpen(false);
  };

  return (
    <Box width="80%">
      <CustomButton
        variant="contained"
        fullWidth
        value="Delete"
        onClick={() => setOpen(true)}
        disabled={email === userEmail}
      />
      <DeleteDialog
        userName={userName}
        open={open}
        setOpen={setOpen}
        deleteUser={deleteUserHandler}
      />
    </Box>
  );
}

export default DeleteUser;
