/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */

import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { LoadingButton } from '@mui/lab/';
import { Backdrop, Box, Fade, IconButton, InputAdornment, Modal, Typography } from '@mui/material';

import { RootState } from '../../../../redux/store';
import { snackActions } from '../../../../utils/helpers/snackBarUtils';
import { Input } from '../../../common';
import { validationSchema } from '../../../../utils/validators/personalPage/changePasswordModal/formValidator';
import styles from './styles';
import { changePasswordProfile } from '../../../../redux/slices/users';

interface ChangePasswordModalProps {
  open: boolean;
  handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ChangePassword {
  password: string;
  newPassword: string;
  confirmPassword: string;
}

function ChangePasswordModal({ open, handleClose }: ChangePasswordModalProps) {
  const dispatch = useDispatch();
  const email = useSelector((state: RootState) => state.userReducer.email);
  const users = useSelector((state: RootState) => state.usersReducer);
  const searchUser = useSelector((state: RootState) =>
    state.usersReducer.find((user) => user.email === email),
  );
  const index = users.indexOf(searchUser as any);
  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleMouseEvent = () => setShowPassword(!showPassword);

  const formOptions = {
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
  };

  const { register, handleSubmit, formState } = useForm(formOptions);

  const { errors, dirtyFields } = formState;
  const isDirtyFields =
    !dirtyFields.password || !dirtyFields.newPassword || !dirtyFields.confirmPassword;

  const onSubmit: SubmitHandler<ChangePassword> = async (formData) => {
    if (formData.password !== searchUser!.password) {
      snackActions.error('Wrong Password!');
    } else {
      console.log(index);
      dispatch(changePasswordProfile({ index, password: formData.newPassword }));
      snackActions.success('Your password has been changed');
      handleClose(false);
    }
  };

  return (
    <Modal
      disableScrollLock
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}>
      <Fade in={open}>
        <Box css={styles.modalStyles} boxShadow={24}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Change password
          </Typography>
          <form
            css={(styles.flexColumnStyles, styles.formStyles)}
            onSubmit={handleSubmit(onSubmit as any)}>
            <Box>
              <Input
                required
                label="Old password"
                variant="outlined"
                name="password"
                type="password"
                errorMsg={errors.password?.message}
                register={register}
              />
              <Input
                required
                label="Password"
                variant="outlined"
                name="newPassword"
                type={showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onMouseUp={handleMouseEvent}
                        onMouseDown={handleMouseEvent}
                        edge="end">
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                errorMsg={errors.newPassword?.message}
                register={register}
              />
              <Input
                required
                variant="outlined"
                label="Confirm password"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                errorMsg={errors.confirmPassword?.message}
                register={register}
              />
            </Box>
            <LoadingButton type="submit" variant="contained" disabled={isDirtyFields} fullWidth>
              Change
            </LoadingButton>
          </form>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ChangePasswordModal;
