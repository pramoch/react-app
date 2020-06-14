export const checkLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(loginSuccess(token));
    }
  }
}

export const login = (history, from) => {
  return (dispatch) => {
    dispatch({
      type: 'LOGIN'
    });
    const token = 'LOGIN_TOKEN';
    localStorage.setItem('token', token);
    dispatch(loginSuccess(token));
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
    localStorage.removeItem('token');
    dispatch({
      type: 'LOGOUT'
    });
  }
}