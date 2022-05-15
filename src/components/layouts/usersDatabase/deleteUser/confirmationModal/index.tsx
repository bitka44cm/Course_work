/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';

import { Box, Dialog, IconButton, Stack, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CustomButton } from '../../../../common';
import styles from './styles';

interface DeleteDialogProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  deleteUser: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  open: boolean;
  userName: string;
}

function DeleteDialog({ setOpen, open, userName, deleteUser }: DeleteDialogProps): ReactElement {
  return (
    <Box>
      {open && (
        <Dialog onClose={() => setOpen(false)} open={open}>
          <Box css={styles.extrasMenuContainerStyle}>
            <Box css={styles.extrasMenuHeaderStyle}>
              <Stack direction="row" alignItems="center" gap={1}>
                <DeleteIcon />
                <Typography variant="h6">Delete user?</Typography>
              </Stack>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Box>
            <Box css={styles.extrasMenuContentStyle}>
              <Typography>Are you sure you want to delete {userName}?</Typography>
            </Box>
            <Box css={styles.extrasMenuFooterStyle}>
              <CustomButton
                onClick={() => setOpen(false)}
                css={styles.closeButtonStyle}
                value="Cancel"
                variant="contained"
                color="secondary"
              />
              <CustomButton
                type="button"
                value="Delete"
                onClick={deleteUser}
                css={styles.rejectButtonStyle}
                color="primary"
                variant="contained"
              />
            </Box>
          </Box>
        </Dialog>
      )}
    </Box>
  );
}

export default DeleteDialog;
