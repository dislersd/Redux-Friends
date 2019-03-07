import { LOGIN_START } from "../actions";

export const initialState = {
  friends: [],
  error: '',
  isLoading: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
    return {
      ...state,
      error: '',
      isLoading: true
    }
    default:
      return state;
  }
};

export default reducer;