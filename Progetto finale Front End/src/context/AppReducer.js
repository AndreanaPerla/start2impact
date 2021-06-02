export default (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITES":
      return {
        ...state,
        favorites: [action.payload, ...state.favorites],
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorites) => favorites.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
