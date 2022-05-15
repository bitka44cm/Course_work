/** @jsxImportSource @emotion/react */
import React from 'react';
import { Box, Dialog, IconButton, Stack, Typography, InputAdornment } from '@mui/material';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import { yupResolver } from '@hookform/resolvers/yup';
import { Close, Visibility, VisibilityOff } from '@mui/icons-material';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { CustomButton, Input } from '../../../common';
import { snackActions } from '../../../../utils/helpers/snackBarUtils';

import { validationSchema } from '../../../../utils/validators/createNewUser/formValidator';
import { SELECT_OPTIONS } from '../../confirmUserReginstrationTable/newUsersPage/newUserSubmission/index';

import styles from './styles';
import { CustomSelect } from '../../../common/select';
import { setUserWithRole } from '../../../../redux/slices/users';

interface DeleteUserProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

interface InputProps {
  name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
  roleName: string;
}

function CreateUser({ setOpen, open }: DeleteUserProps) {
  const formOptions = {
    defaultValues: {
      name: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
      roleName: SELECT_OPTIONS[0].value,
    },
    resolver: yupResolver(validationSchema),
  };

  const dispatch = useDispatch();

  const { register, handleSubmit, formState, control } = useForm(formOptions);
  const { errors, dirtyFields } = formState;

  const isDirtyFields =
    !dirtyFields.name ||
    !dirtyFields.surname ||
    !dirtyFields.email ||
    !dirtyFields.password ||
    !dirtyFields.confirmPassword;

  const [showPassword, setShowPassword] = React.useState<boolean>(false);
  const handleMouseHold = () => setShowPassword(!showPassword);

  const onSubmit: SubmitHandler<InputProps> = (formData) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, roleName, ...requestData } = formData;
    dispatch(setUserWithRole({ roles: roleName, ...requestData }));
    snackActions.success('User has been created');
    setOpen(false);
  };

  return (
    <Box>
      {open && (
        <Dialog onClose={() => setOpen(false)} open={open}>
          <Box css={styles.extrasMenuContainerStyle}>
            <Box css={styles.extrasMenuHeaderStyle}>
              <Stack direction="row" alignItems="center" gap={1}>
                <PersonAddAltIcon />
                <Typography variant="h6">Creation of New User</Typography>
              </Stack>
              <IconButton onClick={() => setOpen(false)}>
                <Close />
              </IconButton>
            </Box>
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
                        onMouseUp={handleMouseHold}
                        onMouseDown={handleMouseHold}
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
              <CustomSelect
                options={SELECT_OPTIONS}
                label="Role"
                name="roleName"
                helperText={errors.role?.message}
                required
                control={control as any}
                boxStyles={styles.selectContainerStyle}
                id="role"
                dataTestId="new-user-info_role-select"
              />
              <CustomButton
                data-testid="submit-btn"
                disabled={isDirtyFields}
                color="primary"
                id="mainButton"
                variant="contained"
                type="submit"
                fullWidth
                boxStyle={styles.selectContainerStyle}>
                Create user
              </CustomButton>
            </form>
          </Box>
        </Dialog>
      )}
    </Box>
  );
}

export default CreateUser;
