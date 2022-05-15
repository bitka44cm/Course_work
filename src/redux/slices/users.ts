import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ROLES } from '../../constants/roles';

export interface RoleType {
  name: string;
}

export type Managers = {
  name: string;
  surname: string;
};

export interface UserState {
  name: string;
  surname: string;
  password: string;
  email: string;
  isAuthenticated: boolean;
  status: string;
  roles: string;
  dateOfBirth: string;
  phoneNumber: string;
  contactInfo: string;
  startingDay: string;
}

export interface UserWithManager
  extends Omit<UserState, 'isAuthenticated' | 'avatarImg' | 'status'> {}

export interface LoginData {
  name: string;
  surname: string;
  password: string;
  email: string;
}

export interface CreateUser {
  name: string;
  surname: string;
  password: string;
  email: string;
  roles: string;
}

export interface AdditionalData {
  dateOfBirth: string;
  phoneNumber: string;
  contactInfo: string;
  startingDay: string;
  index: number;
}

export interface ResetPassword {
  password: string;
  index: number;
}

const initialState: UserState[] = [
  {
    name: 'admin',
    surname: 'admin',
    password: 'adminadmin',
    email: 'admin@admin.com',
    isAuthenticated: true,
    status: 'Confirmed',
    roles: 'Admin',
    dateOfBirth: '01.01.2001',
    phoneNumber: '11111111',
    contactInfo: 'adminadmin',
    startingDay: '01.01.2001',
  },
  {
    name: 'Bogdan',
    surname: 'Bogdan',
    password: '12341234',
    email: 'bogdan@admin.com',
    isAuthenticated: true,
    status: 'Confirmed',
    roles: ROLES.EMPLOYEE,
    dateOfBirth: '01.01.2001',
    phoneNumber: '11111111',
    contactInfo: 'adminadmin',
    startingDay: '01.01.2001',
  },
  {
    name: 'Artem',
    surname: 'Artem',
    password: '12341234',
    email: 'artem@admin.com',
    isAuthenticated: true,
    status: 'Confirmed',
    roles: ROLES.MANAGER,
    dateOfBirth: '01.01.2001',
    phoneNumber: '11111111',
    contactInfo: 'adminadmin',
    startingDay: '01.01.2001',
  },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUser: (state, { payload }: PayloadAction<LoginData>) => {
      state.push({
        isAuthenticated: false,
        status: '',
        roles: ROLES.UNAPPROVED,
        dateOfBirth: '',
        phoneNumber: '',
        contactInfo: '',
        startingDay: '',
        ...payload,
      });
    },
    setUserWithRole: (state, { payload }: PayloadAction<CreateUser>) => {
      state.push({
        isAuthenticated: false,
        status: 'Confirmed',
        dateOfBirth: '',
        phoneNumber: '',
        contactInfo: '',
        startingDay: '',
        ...payload,
      });
    },
    changePassword: (state, { payload: { password, index } }: PayloadAction<ResetPassword>) => {
      state[index].password = password;
    },
    assignRole: (
      state,
      { payload: { index, role } }: PayloadAction<{ index: number; role: string }>,
    ) => {
      state[index].roles = role;
      state[index].status = 'Confirmed';
    },
    rejectUser: (state, { payload: { index } }: PayloadAction<{ index: number }>) => {
      state[index].status = 'Rejected';
    },
    deleteUser: (state, { payload: { index } }: PayloadAction<{ index: number }>) => {
      state.splice(index, 1);
    },
    setAdditionalInfo: (
      state,
      {
        payload: { dateOfBirth, phoneNumber, contactInfo, startingDay, index },
      }: PayloadAction<AdditionalData>,
    ) => {
      state[index].startingDay = startingDay;
      state[index].dateOfBirth = dateOfBirth;
      state[index].contactInfo = contactInfo;
      state[index].phoneNumber = phoneNumber;
    },
    changePasswordProfile: (
      state,
      { payload: { password, index } }: PayloadAction<{ password: string; index: number }>,
    ) => {
      state[index].password = password;
    },
  },
});

export const {
  setUser,
  changePassword,
  assignRole,
  rejectUser,
  setUserWithRole,
  deleteUser,
  setAdditionalInfo,
  changePasswordProfile,
} = usersSlice.actions;

export default usersSlice.reducer;
