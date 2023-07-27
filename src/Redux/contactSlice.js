// src/redux/contactSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [], // Make sure contacts is an array
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts(state, action) {
      state.contacts = action.payload;
    },
  },
});

export const { setContacts } = contactSlice.actions;
export default contactSlice.reducer;
