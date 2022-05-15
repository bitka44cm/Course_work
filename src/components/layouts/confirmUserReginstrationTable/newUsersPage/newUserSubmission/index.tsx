/** @jsxImportSource @emotion/react */
import React, { ReactElement } from 'react';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch, useSelector } from 'react-redux';
import { validationSchema } from '../../../../../utils/validators/newUserSubmission/formValidator';
import styles from './styles';
import { CustomButton } from '../../../../common';
import RejectModal from './rejectModal';
import { CustomSelect } from '../../../../common/select';
import { snackActions } from '../../../../../utils/helpers/snackBarUtils';
import { RootState } from '../../../../../redux/store';
import { assignRole } from '../../../../../redux/slices/users';

export const SELECT_OPTIONS = [
  { label: 'Employee', value: 'Employee' },
  { label: 'Manager', value: 'Manager' },
  { label: 'Admin', value: 'Admin' },
];

export type SelectUserRoleType = {
  role: string;
};

interface UserInfoProps {
  email: string;
}

function NewUserSubmission({ email }: UserInfoProps): ReactElement {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SelectUserRoleType>({
    resolver: yupResolver(validationSchema),
  });
  const dispatch = useDispatch();
  const users = useSelector((state: RootState) => state.usersReducer);
  const searchUser = useSelector((state: RootState) =>
    state.usersReducer.find((user) => user.email === email),
  );
  const index = users.indexOf(searchUser as any);

  const confirmHandler = handleSubmit((datas) => {
    dispatch(assignRole({ index, role: datas.role }));
    snackActions.success('User was assigned successfully');
  });

  return (
    <Box css={styles.formWrapper}>
      <form css={styles.userRoleForm} onSubmit={confirmHandler}>
        <Box>
          <CustomSelect
            options={SELECT_OPTIONS}
            label="Role"
            name="role"
            defaultValue={SELECT_OPTIONS[0].value}
            helperText={errors.role?.message}
            required
            control={control}
            boxStyles={styles.selectRoleContainerStyle}
            styleForErrorText={styles.selectRoleErrorStyle}
            id="role"
            dataTestId="new-user-info_role-select"
          />
        </Box>
        <Box>
          <CustomButton
            value="Confirm"
            type="submit"
            variant="contained"
            sx={{ minWidth: '140px' }}
            dataTestId="new-user-info_confirm-button"
          />
        </Box>
      </form>
      <RejectModal email={email} />
    </Box>
  );
}

export default NewUserSubmission;
