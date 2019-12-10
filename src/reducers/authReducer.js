export default (state = {
  isAuthenticated: false
}, action) => {
    switch (action.type) {
      case 'LOGIN': {
        return {
          ...state,
          isAuthenticated: action.token !== undefined,
        }
      }
      case 'LOGOUT': {
        return {
          ...state,
          isAuthenticated: false,
        }
      }
      default:
        return state
    }
  }
  