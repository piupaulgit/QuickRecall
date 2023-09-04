import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {
    email: ''
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload
    },
    saveUserEmailOnly: (state, action) => {
        state.user.email = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { saveUser, saveUserEmailOnly } = userSlice.actions

export default userSlice.reducer