export const login = (history, from) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN'
    });
    dispatch(loginSuccess('LOGIN_TOKEN'));
    history.replace(from);
  }
}

export const loginSuccess = (token) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN_SUCCESS',
      payload: token
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT'
    });
  }
}