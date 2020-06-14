export const login = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN',
      payload: 'LOGIN_TOKEN'
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    })
  }
}