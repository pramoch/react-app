export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { token: action.payload }
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};