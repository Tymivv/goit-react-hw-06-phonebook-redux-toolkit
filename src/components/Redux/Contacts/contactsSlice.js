import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setContacts: (state, { payload }) => {
      state.items = payload;
    },

    addContacts: (state, { payload }) => {
      state.items.push(payload);
    },

    editContacts: (state, { payload }) => {
      const idx = state.items.findIndex(city => city.id === payload.id);
      state.items[idx] = payload;
    },

    deleteContacts: (state, { payload }) => {
      const idx = state.items.findIndex(city => city.id === payload.id);
      state.items.splice(idx, 1);
    },

    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
});

export const {
  setContacts,
  addContacts,
  editContacts,
  deleteContacts,
  changeFilter,
} = contactsSlice.actions;

export default contactsSlice.reducer;
