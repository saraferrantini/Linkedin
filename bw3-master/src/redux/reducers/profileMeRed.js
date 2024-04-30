import { PROFILE_ME_REQUEST, PROFILE_ME_SUCCESS, PROFILE_ME_FAILURE } from "../actions/profileMeAct";

const initialState = {
  profileData: null,
  loading: false,
  error: null,
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case PROFILE_ME_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PROFILE_ME_SUCCESS:
      return {
        ...state,
        loading: false,
        profileData: action.payload,
        error: null,
      };
    case PROFILE_ME_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default meReducer;
