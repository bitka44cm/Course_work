import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GetSuccessMessagePayload {
  message: string;
}

export interface ContactsState {
  message: string;
}

const initialState: ContactsState = {
  message: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setSuccessMessage: (
      state,
      { payload: { message } }: PayloadAction<GetSuccessMessagePayload>,
    ) => {
      state.message = message;
    },
  },
  extraReducers: {},
});

export const { setSuccessMessage } = contactsSlice.actions;

export default contactsSlice.reducer;
