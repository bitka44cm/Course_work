import { SerializedStyles } from '@emotion/react';
import { Box, Tooltip } from '@mui/material';
import NewUserSubmission from '../components/layouts/confirmUserReginstrationTable/newUsersPage/newUserSubmission';
import { UserData } from '../components/layouts/usersDatabase';
// import ChooseTeam from '../components/layouts/usersDatabase/chooseTeam';
import DeleteUser from '../components/layouts/usersDatabase/deleteUser';
import usersDatabaseStyles from '../components/layouts/usersDatabase/styles';
// import PreviewUserProfile from '../components/layouts/usersDatabase/previewUserProfile';

// Basic
export const PageSize = {
  SMALL: 15,
  MEDIUM: 25,
  LARGE: 50,
};

export interface Column<T, ColumnsKey> {
  key: ColumnsKey;
  label: string;
  minWidth?: number;
  maxWidth?: number;
  width?: number;
  align?: 'left' | 'center' | 'right';
  customStyles?: SerializedStyles;
  customLayout?: (value: T) => JSX.Element;
}

//

// User database region
export type UserColumnKeys = 'id' | 'name' | 'email' | 'roles' | 'managers' | 'surname';

export type ManagerColumnKeys = UserColumnKeys | 'careerDay' | 'chooseTeam';

export type AdminColumnKeys = UserColumnKeys | 'deleteUser';

export const userColumns: Column<UserData, UserColumnKeys>[] = [
  {
    key: 'id',
    label: '#',
    minWidth: 70,
  },
  {
    key: 'name',
    label: 'First name',
    minWidth: 140,
  },
  {
    key: 'surname',
    label: 'Last name',
    minWidth: 140,
  },
  {
    key: 'email',
    label: 'Email address',
    width: 250,
    customStyles: usersDatabaseStyles.emailCell,
    customLayout: ({ email }: UserData) => (
      <Tooltip title={email}>
        <Box
          component="span"
          onClick={() => {
            window.open(`mailto:${email}`);
          }}>
          {email}
        </Box>
      </Tooltip>
    ),
  },
  {
    key: 'roles',
    label: 'Role',
    minWidth: 100,
  },
  {
    key: 'managers',
    label: 'Managers',
    minWidth: 180,
    customStyles: usersDatabaseStyles.managersCell,
  },
];

export const managerColumns: Column<UserData, ManagerColumnKeys>[] = [
  ...userColumns,
  {
    key: 'careerDay',
    label: 'Career day',
    minWidth: 120,
  },
  {
    key: 'chooseTeam',
    label: 'Add/Remove teammate',
    minWidth: 130,
    // customLayout: (value: UserData) => (
    //   <ChooseTeam managers={value.managerIds} userId={value.uuid} userName={value.name} />
    // ),
  },
];

export const adminColumns: Column<UserData, AdminColumnKeys>[] = [
  {
    key: 'id',
    label: '#',
    minWidth: 70,
  },
  {
    key: 'name',
    label: 'First name',
    minWidth: 140,
    // customStyles: usersDatabaseStyles.nameCell,
    // customLayout: (value: UserData) => <PreviewUserProfile id={value.uuid} name={value.name} />,
  },
  {
    key: 'surname',
    label: 'Last name',
    minWidth: 140,
  },
  {
    key: 'email',
    label: 'Email address',
    width: 250,
    customStyles: usersDatabaseStyles.emailCell,
    customLayout: ({ email }: UserData) => (
      <Tooltip title={email}>
        <Box
          component="span"
          onClick={() => {
            window.open(`mailto:${email}`);
          }}>
          {email}
        </Box>
      </Tooltip>
    ),
  },
  {
    key: 'roles',
    label: 'Role',
    minWidth: 100,
  },
  {
    key: 'managers',
    label: 'Managers',
    minWidth: 180,
    customStyles: usersDatabaseStyles.managersCell,
  },
  {
    key: 'deleteUser',
    label: '',
    minWidth: 130,
    customLayout: (value: UserData) => <DeleteUser email={value.email} userName={value.name} />,
  },
];
//

// Registration request region
export interface NewUserRequestInfo {
  name: string;
  surname: string;
  email: string;
}

export interface AllUserRequestInfo extends NewUserRequestInfo {
  role: string;
  status: string;
}

export type newRegisterRequestColumnKeys = 'name' | 'surname' | 'email' | 'role';
export type allRegisterRequestColumnKeys = newRegisterRequestColumnKeys | 'status' | 'date';
export const newRegisterRequestColumns: Column<{ email: string }, newRegisterRequestColumnKeys>[] =
  [
    {
      key: 'name',
      label: 'First name',
      minWidth: 240,
    },
    {
      key: 'surname',
      label: 'Last name',
      minWidth: 240,
    },
    {
      key: 'email',
      label: 'Email address',
      minWidth: 300,
    },
    {
      key: 'role',
      label: 'Role',
      minWidth: 400,
      customLayout: ({ email }) => {
        return <NewUserSubmission email={email} />;
      },
    },
  ];
export const allRegisterRequestColumns: Column<AllUserRequestInfo, allRegisterRequestColumnKeys>[] =
  [
    {
      key: 'name',
      label: 'First name',
      minWidth: 140,
    },
    {
      key: 'surname',
      label: 'Last name',
      minWidth: 140,
    },
    {
      key: 'email',
      label: 'Email address',
      minWidth: 200,
    },
    {
      key: 'role',
      label: 'Role',
      minWidth: 100,
    },
    {
      key: 'status',
      label: 'Status',
      minWidth: 100,
    },
    {
      key: 'date',
      label: 'Date',
      minWidth: 120,
    },
  ];
//

export type ColumnsTypeCollector =
  | UserColumnKeys
  | ManagerColumnKeys
  | AdminColumnKeys
  | newRegisterRequestColumnKeys
  | allRegisterRequestColumnKeys;

export type ColumnsInterfaceCollector =
  | AllUserRequestInfo
  | NewUserRequestInfo
  | UserData
  | { id: string };
