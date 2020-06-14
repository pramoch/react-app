export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { token: action.payload }
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};