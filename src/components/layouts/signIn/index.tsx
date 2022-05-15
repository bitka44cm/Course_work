/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { validationSchema } from '../../../utils/validators/signIn/formValidator';
import { CustomButton, Input } from '../../common';
import { useEnhancedNavigate } from '../../../utils/hooks/useEnhancedNavigate';

import * as routes from '../../../constants/routeNames';

import styles from './styles';
import { RootState } from '../../../redux/store';
import { snackActions } from '../../../utils/helpers/snackBarUtils';
import { setCredentials } from '../../../redux/slices/user';

interface SignInPageProps {}

export type SignInForm = {
  email: string;
  password: string;
};

function SignInPage(props: SignInPageProps) {
  const formOption = {
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(validationSchema),
  };
  const { handleSubmit, register, getValues, formState } = useForm(formOption);
  const users = useSelector((state: RootState) => state.usersReducer);
  const dispatch = useDispatch();

  const { dirtyFields, errors } = formState;
  const { scrollNavigate } = useEnhancedNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleMouseUpPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const enableButton = () => {
    const values = getValues();
    return values;
  };

  const onSubmit: SubmitHandler<SignInForm> = (formData: any) => {
    const userValue = users.find(
      (user) => user.email === formData.email && user.password === formData.password,
    );
    if (!userValue) {
      snackActions.error('User not found');
    } else if (userValue.status !== 'Confirmed') {
      snackActions.error('Please where administrator confirm your request');
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...rest } = userValue;
      dispatch(setCredentials(rest));
      const from = routes.MAIN_PAGE_ROUTE;
      scrollNavigate({ top: 0, left: 0, path: from, replace: true, behavior: 'smooth' });
    }
  };

  return (
    <Box css={styles.outerBoxStyle}>
      <Box css={styles.flexStyle}>
        <h1 css={styles.h1Style}>AUTHORIZATION</h1>
        <form css={styles.formStyle} onSubmit={handleSubmit(onSubmit as any)}>
          <Input
            name="email"
            placeholder="example@sunmait.com"
            type="email"
            errorMsg={errors.email?.message}
            label="Email"
            required
            register={register}
          />
          <Input
            name="password"
            placeholder="Enter the password"
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
          <Box css={styles.submitBtnDiv}>
            <CustomButton
              css={styles.submitBtn}
              type="submit"
              variant="contained"
              onClick={enableButton}
              color="primary"
              disabled={!dirtyFields.email || !dirtyFields.password}>
              Submit
            </CustomButton>
          </Box>
        </form>
        <Box css={styles.helperDivStyle}>
          <Box css={styles.needAccountStyle}>
            <p css={styles.needAccountMsgStyle}>Need an account?</p>
            <Link css={styles.linkStyle} to={routes.SIGN_UP_ROUTE}>
              Sign Up!
            </Link>
          </Box>
          <Link css={styles.linkStyle} to={routes.RESET_PASSWORD}>
            Forgot password?
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default SignInPage;
