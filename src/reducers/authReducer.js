const state = {
  token: undefined,
};

export default (state = {}, action) => {
    switch (action.type) {
      case 'LOGIN': {
        console.log(action);
        return {
          ...state,
          token: action.token,
        }
      }
      default:
        return state
    }
  }
  