import { SET_PROFILE } from "../actions/profile";
// import { SET_EXPERIENCES } from "../action/profile";
// import {
//   UPDATE_PROFILE_NAME,
//   UPDATE_PROFILE_SURNAME,
//   UPDATE_PROFILE_EMAIL,
//   UPDATE_PROFILE_USERNAME,
//   UPDATE_PROFILE_BIO,
//   UPDATE_PROFILE_TITLE,
//   UPDATE_PROFILE_AREA,
//   UPDATE_PROFILE_IMAGE,
// } from "../action/profile";

const initialState = {
  name: "",
  surname: "",
  email: "",
  username: "",
  bio: "",
  title: "",
  area: "",
  image: "", // SERVER GENERATED, modificabile
  createdAt: "", // SERVER GENERATED
  updatedAt: "", // SERVER GENERATED
  __v: null, // SERVER GENERATED
  _id: "", // SERVER GENERATED
  experiences: [],
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE:
      return {
        ...state,
        ...action.payload, // Sovrascrivi solo i campi presenti in action.payload
      };

    // case SET_EXPERIENCES:
    //   return {
    //     ...state,
    //     experiences: [...action.payload],
    //   };

    default:
      return state;
  }
};