const initialState = {
  user: {},
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "RESET_STATE":
      return initialState;
    default:
      return state;
  }
};

export default UserReducer;
