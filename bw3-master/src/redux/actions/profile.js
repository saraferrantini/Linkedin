export const SET_PROFILE = "SET_PROFILE";

export const isLoadingTrue = () => ({ type: "SET_IS_LOADING_TRUE" });
export const isLoadingFalse = () => ({ type: "SET_IS_LOADING_FALSE" });

export const profileFetch = (id) => {
  isLoadingTrue();
  return async (dispatch) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/profile/" + id, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",

          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let result = await response.json();
        dispatch({ type: SET_PROFILE, payload: result });
        isLoadingFalse();
      } else {
        throw new Error("Fetch Profilo Fallita");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const updateProfile = (updatedProfileData) => {
  return async (dispatch) => {
    console.log("inizia il PUT");
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/" +
          {
            method: "PUT",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",

              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProfileData),
          }
      );
      console.log(updatedProfileData);

      if (response.ok) {
        let result = await response.json();
        console.log(result);
        dispatch({ type: SET_PROFILE, payload: result });
      } else {
        throw new Error("Aggiornamento Profilo Fallito");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
};
