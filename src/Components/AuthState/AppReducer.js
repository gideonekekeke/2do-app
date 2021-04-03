export const AppReducer = (state, action) => {
  switch (action.type) {
    case "DELECT_USER":
      return {
        ...state,
        current: state.current.filter((user) => {
          return user.id !== action.payload;
        }),
      };

    default:
      return state;
  }
};
