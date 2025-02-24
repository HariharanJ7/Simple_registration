import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: null,
  },
  errors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (state, action) => {
      state.formData[action.payload.field] = action.payload.value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    resetForm: () => initialState,
  },
});

export const { updateField, setErrors, resetForm } = formSlice.actions;
export default formSlice.reducer;
