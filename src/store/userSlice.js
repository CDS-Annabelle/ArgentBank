import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {
      id: null,
      email: null,
      firstName: null,
      lastName: null,
      userName: null,
      isLogin: false,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user.id = action.payload.id
      state.user.email = action.payload.email
      state.user.firstName = action.payload.firstName
      state.user.lastName = action.payload.lastName
      state.user.userName = action.payload.userName
      state.user.isLogin = true
    },
    removeUser: (state) => {
      state.user.id = null
      state.user.email = null
      state.user.firstName = null
      state.user.lastName = null
      state.user.isLogin = false
    },
  },
})

const { setUser, removeUser } = userSlice.actions
export { setUser, removeUser }
