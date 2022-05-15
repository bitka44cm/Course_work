/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import pick from 'lodash/pick';
import LoadingButton from '@mui/lab/LoadingButton';
import { CustomButton, Input, InputWithMask } from '../../common';
import { setAdditionalInfoUser, setCredentials } from '../../../redux/slices/user';
import { RootState } from '../../../redux/store';
import { validationSchema } from '../../../utils/validators/personalPage/formValidator';
import styles from './styles';
import ChangePasswordModal from './changePasswordModal';
import { snackActions } from '../../../utils/helpers/snackBarUtils';
import { setAdditionalInfo } from '../../../redux/slices/users';

interface PersonalPageProps {}
interface EditUserInfo {
  dateOfBirth: string;
  startingDay: string;
  phoneNumber: string;
  contactInfo: string;
}

function PersonalPageLayout(props: PersonalPageProps) {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.userReducer);
  const users = useSelector((state: RootState) => state.usersReducer);
  // const [patchUserById, { isLoading }] = usePatchUserByIdMutation();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const defaultValues = {
    dateOfBirth: user?.dateOfBirth || '',
    startingDay: user?.startingDay || '',
    phoneNumber: user?.phoneNumber || '',
    contactInfo: user?.contactInfo || '',
  };

  const formOption = {
    defaultValues,
    resolver: yupResolver(validationSchema),
  };

  const { handleSubmit, formState, control, register, reset } = useForm(formOption);
  const { dirtyFields, errors, isSubmitSuccessful } = formState;

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({}, { keepValues: true });
    }
  }, [defaultValues]);

  const isDirtyFields =
    dirtyFields.dateOfBirth ||
    dirtyFields.startingDay ||
    dirtyFields.phoneNumber ||
    dirtyFields.contactInfo;

  const errorMessages =
    !!errors.dateOfBirth?.message ||
    !!errors.startingDay?.message ||
    !!errors.phoneNumber?.message ||
    !!errors.contactInfo?.message;

  const onSubmit: SubmitHandler<EditUserInfo> = (formData) => {
    const userValue = users.find((some) => some.email === user.email);
    console.log(formData);
    const index = users.indexOf(userValue as any);
    dispatch(setAdditionalInfo({ index, ...formData }));
    dispatch(setAdditionalInfoUser(formData));
    snackActions.success('Your data has been changed');
  };

  return (
    <Box css={styles.outerBoxStyle}>
      <Box css={styles.textFieldsDivStyle}>
        <Box css={styles.textFieldDivStyle}>
          <p css={styles.pStyle}>Name</p>
          <p css={styles.startStyle}>*</p>
          <Input
            name="name"
            size="small"
            variant="outlined"
            type="text"
            boxStyles={styles.wrapperStyles}
            value={user?.name}
            disabled
          />
        </Box>
        <Box css={styles.textFieldDivStyle}>
          <p css={styles.pStyle}>Surname</p>
          <p css={styles.startStyle}>*</p>
          <Input
            name="surname"
            variant="outlined"
            type="text"
            size="small"
            boxStyles={styles.wrapperStyles}
            value={user.surname}
            disabled
          />
        </Box>
        <Box css={styles.textFieldDivStyle}>
          <p css={styles.pStyle}>Email</p>
          <p css={styles.startStyle}>*</p>
          <Input
            name="email"
            variant="outlined"
            type="text"
            size="small"
            boxStyles={styles.wrapperStyles}
            value={user?.email}
            disabled
          />
        </Box>
        <form css={styles.formStyle} onSubmit={handleSubmit(onSubmit as any)}>
          <Box css={styles.textFieldDivStyle}>
            <p css={styles.pStyle}>Date of Birth</p>
            <p css={styles.startStyle}>&nbsp;&nbsp;</p>
            <InputWithMask
              control={control as any}
              variant="outlined"
              type="text"
              mask="99/99/99"
              name="dateOfBirth"
              size="small"
              errorMsg={errors.dateOfBirth?.message}
            />
          </Box>
          <Box css={styles.textFieldDivStyle}>
            <p css={styles.pStyle}>Starting Day (in the company)</p>
            <p css={styles.startStyle}>&nbsp;&nbsp;</p>
            <InputWithMask
              control={control as any}
              variant="outlined"
              type="text"
              mask="99/99/99"
              name="startingDay"
              size="small"
              errorMsg={errors.startingDay?.message}
            />
          </Box>
          <Box css={styles.textFieldDivStyle}>
            <p css={styles.pStyle}>Phone number</p>
            <p css={styles.startStyle}>&nbsp;&nbsp;</p>
            <InputWithMask
              mask="+375 99 999 99 99"
              type="text"
              variant="outlined"
              size="small"
              name="phoneNumber"
              control={control as any}
              errorMsg={errors.phoneNumber?.message}
            />
          </Box>
          <Box css={styles.textFieldDivStyle}>
            <p css={styles.pStyle}>Skype or Telegram contactInfo</p>
            <p css={styles.startStyle}>&nbsp;&nbsp;</p>
            <Input
              name="contactInfo"
              variant="outlined"
              type="text"
              size="small"
              boxStyles={styles.wrapperStyles}
              errorMsg={errors.contactInfo?.message}
              register={register}
            />
          </Box>
          <Box css={styles.saveButtonBoxStyle}>
            <LoadingButton
              css={styles.saveButtonStyle}
              type="submit"
              variant="contained"
              color="primary"
              disabled={!isDirtyFields || errorMessages}
              fullWidth>
              save
            </LoadingButton>
          </Box>
          <CustomButton
            css={styles.saveButtonStyle}
            onClick={handleOpen}
            boxStyle={styles.saveButtonBoxStyle}
            value="Change Password"
            variant="contained"
            color="primary"
          />
        </form>
        <ChangePasswordModal open={open} handleClose={handleClose} />
      </Box>
    </Box>
  );
}

export default PersonalPageLayout;
