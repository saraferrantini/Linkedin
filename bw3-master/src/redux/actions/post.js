export const SET_POST = "SET_POST";

const post = () => {
  return async (dispatch) => {
    console.log("Ciao Sono POSTFETCH");
    try {
      let resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw",
          "Content-Type": "application/json",
        },
      });
      if (resp.ok) {
        let result = await resp.json();
        console.log(result);
        dispatch({
          type: SET_POST,
          payload: result,
        });
      } else {
        throw new Error("Errore fetcamento");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};

export default post;

// "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkNWU2MGY5NGY0YTAwMTkzNzkxZDYiLCJpYXQiOjE3MTIxNTIxNjAsImV4cCI6MTcxMzM2MTc2MH0.RcnjBt8Rp9rbpgktsZhm9U5HzwymeiRgeKD0WWAT-Rg"
