import { SET_POST } from "../actions/post";

const initialState = {
  postState: [],
  isLoading: true,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POST:
      return {
        ...state,
        postState: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};