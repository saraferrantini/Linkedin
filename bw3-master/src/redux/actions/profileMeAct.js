export const PROFILE_ME_REQUEST = "PROFILE_ME_REQUEST";
export const PROFILE_ME_SUCCESS = "PROFILE_ME_SUCCESS";
export const PROFILE_ME_FAILURE = "PROFILE_ME_FAILURE";

export const profileMeAct = () => {
  return async (dispatch) => {
    dispatch({ type: PROFILE_ME_REQUEST });
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
        },
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      dispatch({ type: PROFILE_ME_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: PROFILE_ME_FAILURE, payload: error.message });
    }
  };
};
