const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'BOOKS_LOADED':
      return {
        books: actions.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default reducer;