/** @jsxImportSource @emotion/react */

import React, { ReactElement } from 'react';
import { Box, Modal, Fade, Backdrop } from '@mui/material';
import { useDispatch } from 'react-redux';
import { CustomButton } from '../../../common/button';
import { setSuccessMessage } from '../../../../redux/slices/contacts';

import styles from './styles';

interface SuccessModalProps {
  successMsg: string;
  setActiveModal: (value: boolean) => void;
  open: boolean;
  onClose: () => void;
}

function SuccessModal({
  successMsg,
  setActiveModal,
  open,
  onClose,
}: SuccessModalProps): ReactElement {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(setSuccessMessage({ message: '' }));
    setActiveModal(false);
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      disableAutoFocus
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <Box css={styles.modalStyles} boxShadow={24}>
          <Box css={styles.successImgWrapperStyle}>
            <img src="https://img.icons8.com/ios/100/26e07f/ok--v1.png" alt="success" />
          </Box>
          <Box css={styles.successMessageWrapperStyle}>
            <p>Great!</p>
            <p>{successMsg}</p>
          </Box>
          <Box css={styles.closeButtonWrapperStyle}>
            <CustomButton
              css={styles.closeButtonStyle}
              onClick={onClickHandler}
              value="Close"
              type="button"
              color="secondary"
              variant="contained"
            />
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}

export default SuccessModal;
