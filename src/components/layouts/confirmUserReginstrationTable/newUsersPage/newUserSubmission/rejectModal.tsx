/** @jsxImportSource @emotion/react */
import React, { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Close, PersonRemove } from '@mui/icons-material';
import { Box, Dialog, IconButton, Stack, Typography } from '@mui/material';

import { CustomButton } from '../../../../common';
import styles from './styles';
import { RootState } from '../../../../../redux/store';
import { rejectUser } from '../../../../../redux/slices/users';

interface RejectModalProps {
  email: string;
}

function RejectModal({ email }: RejectModalProps): ReactElement {
  const [rejectRoleMode, setRejectRoleMode] = useState<boolean>(false);
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.usersReducer);
  const searchUser = useSelector((state: RootState) =>
    state.usersReducer.find((user) => user.email === email),
  );
  const index = users.indexOf(searchUser as any);
  const rejectConfirmButtonHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(rejectUser({ index }));
    setRejectRoleMode(false);
  };

  const rejectButtonHandler = () => {
    setRejectRoleMode(true);
  };

  return (
    <Box css={styles.rejectedFormStyle}>
      <CustomButton
        onClick={rejectButtonHandler}
        value="Reject"
        type="button"
        color="secondary"
        variant="contained"
        sx={{ minWidth: '140px' }}
        dataTestId="new-user-info_reject-button"
      />
      {rejectRoleMode && (
        <Dialog onClose={() => setRejectRoleMode(false)} open={rejectRoleMode}>
          <Box css={styles.extrasMenuContainerStyle} data-testid="new-user-info_reject-modal">
            <Box css={styles.extrasMenuHeaderStyle}>
              <Stack direction="row" alignItems="center" gap={1}>
                <PersonRemove />
                <Typography variant="h6">Reject this person?</Typography>
              </Stack>
              <IconButton onClick={() => setRejectRoleMode(false)}>
                <Close />
              </IconButton>
            </Box>
            <Box css={styles.extrasMenuContentStyle}>
              <Typography>Are you sure you want to reject the registration request?</Typography>
            </Box>
            <Box css={styles.extrasMenuFooterStyle}>
              <CustomButton
                onClick={() => setRejectRoleMode(false)}
                css={styles.closeButtonStyle}
                value="Cancel"
                variant="contained"
                color="secondary"
                dataTestId="new-user-info_close-button"
              />
              <CustomButton
                type="button"
                value="Reject"
                onClick={rejectConfirmButtonHandler}
                css={styles.rejectButtonStyle}
                color="primary"
                variant="contained"
                dataTestId="new-user-info_yes-button"
              />
            </Box>
          </Box>
        </Dialog>
      )}
    </Box>
  );
}

export default RejectModal;
