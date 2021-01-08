const initialState = {
  books: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case 'FETCH_BOOKS_REQUEST':
      return {
        books: [],
        loading: true,
        error: null
      };

    case 'FETCH_BOOKS_SUCCESS':
      return {
        books: actions.payload,
        loading: false,
        error: null
      };

    case 'FETCH_BOOKS_FAILURE':
      return {
        books: [],
        loading: false,
        error: actions.payload
      };
    default:
      return state;
  }
};

export default reducer;