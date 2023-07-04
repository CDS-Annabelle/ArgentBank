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
      throw new Error(response.statusText)
    }
    const data = await response.json()

    if (data.status === 200 && data.body && data.body.token) {
      const { token } = data.body
      addToken(token)
      return data
    }
    throw new Error('error token')
  } catch (e) {
    return e
  }
}

const getUserData = async () => {
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

const updateUserData = async (firstName, lastName) => {
  const token = getToken()
  if (!token) {
    throw new Error('Not authenticated')
  }
  const response = await fetch('http://localhost:3001/api/v1/user/profile', {
    method: 'PUT',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      firstName,
      lastName,
    }),
  })
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  const data = await response.json()
  return data.body
}

const loginAction = async (email, password) => {
  try {
    const response = await login(email, password)
    const user = await getUserData()
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
  removeToken()
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
    const data = await getUserData()
    store.dispatch(setUser(data))
  } catch (error) {
    console.log('error')
  }
}

const updateName = async (firstName, lastName) => {
  try {
    const user = await getUserData()
    await updateUserData(firstName, lastName)
    store.dispatch(
      setUser({
        id: user.id,
        email: user.email,
        firstName,
        lastName,
        isLogin: true,
      })
    )
    return true
  } catch (e) {
    return e
  }
}

export { loginAction as login, logout, isLogin, fetchUserData, updateName }
