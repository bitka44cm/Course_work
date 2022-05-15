/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import { snackActions } from '../../../utils/helpers/snackBarUtils';
import { SIGN_IN_ROUTE } from '../../../constants/routeNames';
import { useEnhancedNavigate } from '../../../utils/hooks/useEnhancedNavigate';
import { CustomButton, Input, Modal } from '../../common';
import { validationSchema } from '../../../utils/validators/resetPassword/formValidator';
import { RootState } from '../../../redux/store';
import { changePassword } from '../../../redux/slices/users';

import styles from './styles';

interface ForgotPasswordProps {}

export type ResetPassword = {
  email: string;
  password: string;
  confirmPassword: string;
};

function ResetPasswordLayout(props: ForgotPasswordProps) {
  const formOption = {
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
  };

  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const { handleSubmit, register, formState } = useForm(formOption);

  const users = useSelector((state: RootState) => state.usersReducer);
  const dispatch = useDispatch();

  const { errors, dirtyFields } = formState;

  const { scrollNavigate } = useEnhancedNavigate();

  const onSubmit: SubmitHandler<ResetPassword> = async (formData): Promise<void> => {
    const userValue = users.find((user) => user.email === formData.email);
    if (!userValue) {
      snackActions.error('User not found');
    } else if (!userValue.isAuthenticated) {
      snackActions.error('Please where administrator confirm your request');
    } else {
      const index = users.indexOf(userValue);
      dispatch(changePassword({ index, password: formData.confirmPassword }));
      const from = SIGN_IN_ROUTE;
      scrollNavigate({ top: 0, left: 0, path: from, replace: true, behavior: 'smooth' });
      setSuccess(true);
      snackActions.success('Your password has been successfully changed');
    }
  };

  const handleMouseUpPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const closeModal = () => scrollNavigate({ top: 0, left: 0, path: SIGN_IN_ROUTE });
  return (
    <Box css={styles.outerBoxStyle}>
      <Box css={styles.flexStyle}>
        <h1 css={styles.h1Style}>RESET PASSWORD</h1>
        <form css={styles.formStyle} onSubmit={handleSubmit(onSubmit as any)}>
          <Input
            name="email"
            placeholder="example@sunmait.com"
            type="email"
            helperText={errors.email?.message}
            label="Email"
            required
            register={register}
          />
          <Input
            name="password"
            type={showPassword ? 'text' : 'password'}
            errorMsg={errors.password?.message}
            label="Password"
            required
            register={register}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onMouseUp={handleMouseUpPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Input
            name="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            errorMsg={errors.confirmPassword?.message}
            label="Confirm password"
            required
            register={register}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onMouseUp={handleMouseUpPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box css={styles.parentBtnStyleDiv}>
            <CustomButton
              css={styles.resetBtnStyle}
              type="submit"
              variant="contained"
              onSubmit={handleSubmit(onSubmit as any)}
              color="primary"
              disabled={
                !dirtyFields.password || !dirtyFields.confirmPassword || !dirtyFields.email
              }>
              RESET MY PASSWORD
            </CustomButton>
          </Box>
          <Link to={SIGN_IN_ROUTE} css={styles.linkStyle}>
            <Box css={styles.parentBtnStyleDiv}>
              <CustomButton
                css={styles.resetBtnStyle}
                data-testid="return-btn"
                color="secondary"
                id="secondaryButton"
                variant="contained"
                type="button">
                Back
              </CustomButton>
            </Box>
          </Link>
        </form>
      </Box>
      {isSuccess && (
        <Modal closeModal={closeModal}>
          <div>
            <p css={styles.modalMessageStyle}>Your password had been successfully reset.</p>
            <Link to={SIGN_IN_ROUTE} css={styles.linkStyle}>
              <CustomButton
                css={styles.toLoginPageStyle}
                type="submit"
                variant="contained"
                color="primary">
                Back to sign in Page
              </CustomButton>
            </Link>
          </div>
        </Modal>
      )}
    </Box>
  );
}

export default ResetPasswordLayout;
