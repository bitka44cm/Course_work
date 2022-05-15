/** @jsxImportSource @emotion/react */
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

import { SIGN_IN_ROUTE } from '../../../constants/routeNames';
import { useEnhancedNavigate } from '../../../utils/hooks/useEnhancedNavigate';
import { snackActions } from '../../../utils/helpers/snackBarUtils';
import { CustomButton, Input } from '../../common';
import { validationSchema } from '../../../utils/validators/signup/formValidator';

import styles from './styles';
import { RootState } from '../../../redux/store';
import { setUser } from '../../../redux/slices/users';

interface SignUpLayoutProps {}

interface InputProps {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}

function SignUpLayout(props: SignUpLayoutProps) {
  const dispatch = useDispatch();
  const { scrollNavigate } = useEnhancedNavigate();
  const users = useSelector((state: RootState) => state.usersReducer);
  const formOptions = {
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(validationSchema),
  };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors, dirtyFields } = formState;

  const isDirtyFields =
    !dirtyFields.name ||
    !dirtyFields.surname ||
    !dirtyFields.email ||
    !dirtyFields.password ||
    !dirtyFields.confirmPassword;

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleMouseUpPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<InputProps> = async (formData): Promise<void> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...requestData } = formData;
    const userValue = users.find((user) => user.email === formData.email);
    if (!userValue) {
      dispatch(setUser(requestData));
      const from = SIGN_IN_ROUTE;
      scrollNavigate({ top: 0, left: 0, path: from, replace: true });
      snackActions.info('You have been registered. Wait for administratior to approve you.');
    }
  };

  return (
    <Box component="main" css={styles.wrapperStyles}>
      <Box css={styles.innerStyles}>
        <Typography component="h1" css={styles.h1Style}>
          REGISTRATION
        </Typography>
        <form css={styles.formStyle} onSubmit={handleSubmit(onSubmit as any)}>
          <Input
            required
            label="First name"
            name="name"
            placeholder="Enter your first name"
            errorMsg={errors.name?.message}
            register={register}
          />
          <Input
            required
            label="Last name"
            name="surname"
            placeholder="Enter your surname"
            errorMsg={errors.surname?.message}
            register={register}
          />
          <Input
            required
            label="Email Address"
            name="email"
            type="email"
            placeholder="sunmait@gmail.com"
            errorMsg={errors.email?.message}
            register={register}
          />
          <Input
            required
            label="Password"
            name="password"
            placeholder="Enter your password"
            type={showPassword ? 'text' : 'password'}
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
            errorMsg={errors.password?.message}
            register={register}
          />
          <Input
            required
            label="Confirm password"
            name="confirmPassword"
            placeholder="Confirm your password"
            type={showPassword ? 'text' : 'password'}
            errorMsg={errors.confirmPassword?.message}
            register={register}
          />
          <Box css={styles.buttonBox}>
            <Link to={SIGN_IN_ROUTE} css={styles.linkStyle}>
              <CustomButton
                data-testid="return-btn"
                color="secondary"
                id="secondaryButton"
                variant="contained"
                type="button">
                Back
              </CustomButton>
            </Link>
            <CustomButton
              data-testid="submit-btn"
              disabled={isDirtyFields}
              color="primary"
              id="mainButton"
              variant="contained"
              type="submit">
              Sign up
            </CustomButton>
          </Box>
        </form>
      </Box>
    </Box>
  );
}

export default SignUpLayout;
