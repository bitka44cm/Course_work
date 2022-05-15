import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AdditionalData, UserState } from './users';

export interface RoleType {
  name: string;
}

export interface Login {
  email: string;
  isAuthenticated: boolean;
}

const initialState: Omit<UserState, 'password'> = {
  name: '',
  surname: '',
  email: '',
  isAuthenticated: false,
  status: '',
  roles: '',
  dateOfBirth: '',
  phoneNumber: '',
  contactInfo: '',
  startingDay: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { name, surname, email, roles, dateOfBirth, phoneNumber, contactInfo },
      }: PayloadAction<Omit<UserState, 'password'>>,
    ) => {
      state.name = name;
      state.surname = surname;
      state.email = email;
      state.isAuthenticated = true;
      state.roles = roles;
      state.dateOfBirth = dateOfBirth;
      state.phoneNumber = phoneNumber;
      state.contactInfo = contactInfo;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    setAdditionalInfoUser: (
      state,
      {
        payload: { dateOfBirth, phoneNumber, contactInfo, startingDay },
      }: PayloadAction<Omit<AdditionalData, 'index'>>,
    ) => {
      state.startingDay = startingDay;
      state.dateOfBirth = dateOfBirth;
      state.contactInfo = contactInfo;
      state.phoneNumber = phoneNumber;
    },
  },
  extraReducers: {},
});

export const { setCredentials, logout, setAdditionalInfoUser } = userSlice.actions;

export default userSlice.reducer;
