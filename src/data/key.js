const addToken = (token) => {
  sessionStorage.setItem('jwt', token)
}

const removeToken = () => {
  sessionStorage.removeItem('jwt')
}

const getToken = () => {
  return sessionStorage.getItem('jwt')
}

const hasToken = () => {
  return !!getToken()
}

export { addToken, removeToken, getToken, hasToken }
