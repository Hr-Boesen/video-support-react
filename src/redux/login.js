import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    loggedIn: 0
  },
  reducers: {
    setUserLogin: (state, action) => {
      state.loggedIn = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setUserLogin } = loginSlice.actions

export default loginSlice.reducer