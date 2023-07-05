import { addToken, getToken, removeToken, hasToken } from './key'
import { setUser } from '../store/userSlice'
import store from '../store'

const login = async (email, password) => {
  try {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    if (!response.ok) {
      throw new Error('error connexion')
    }
    const data = await response.json()

    const { token } = data.body || {}
    if (data.status === 200 && token) {
      addToken(token)
      return data
    }
    throw new Error('error token')
  } catch (error) {
    console.error('Error: ', error)
    throw error
  }
}

const userProfile = async () => {
  const token = getToken()
  if (!token) {
    throw new Error('Not authenticated')
  }
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.body
}

const updateName = async (firstName, lastName) => {
  try {
    const user = await userProfile()
    const updatedUser = {
      ...user,
      firstName,
      lastName,
    }
    updatedUser.userName = firstName
    const token = getToken()
    if (!token) {
      throw new Error('Error')
    }
    const response = await fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedUser),
    })
    if (!response.ok) {
      throw new Error(response.statusText)
    }
    const data = await response.json()
    store.dispatch(setUser(updatedUser))
    return data.body
  } catch (error) {
    console.error('Failed to update user name:', error)
    return false
  }
}

const loginAction = async (email, password) => {
  try {
    const response = await login(email, password)
    const user = await userProfile()
    store.dispatch(
      setUser({
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        isLogin: true,
      })
    )
    return response
  } catch (e) {
    return e
  }
}

const logout = () => {
  return async (dispatch) => {
    removeToken()
    dispatch(logoutAction())
  }
}

const logoutAction = () => {
  return {
    type: 'LOGOUT',
  }
}

const isLogin = () => {
  if (hasToken()) {
    return true
  }
  logout()
  return false
}

const fetchUserData = async () => {
  try {
    const data = await userProfile()
    store.dispatch(setUser(data))
  } catch (error) {
    console.error('Failed to fetch user data:', error)
  }
}

export { loginAction as login, logout, isLogin, fetchUserData, updateName }
