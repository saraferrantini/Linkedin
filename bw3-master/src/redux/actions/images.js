export const PUT_FETCH = "PUT_FETCH";
export const PUT_IMG = "PUT_IMG";

// per profilo header
export const putFetch = (oggetto) => {
  return (dispatch, getState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw`,
      },
      body: JSON.stringify(oggetto),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((obj) => {
        dispatch({
          type: PUT_FETCH,
          payload: obj,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};

export const putImg = (id, formData) => {
  return (dispatch, getState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((obj) => {
        dispatch({
          type: PUT_FETCH,
          payload: obj,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};
// per esperienza
export const putImgEsperienza = (id, formData, idExp) => {
  return (dispatch, getState) => {
    fetch(` https://striveschool-api.herokuapp.com/api/profile/${id}/experiences/${idExp}/picture`, {
      method: "POST",
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw`,
      },
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })

      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};

export const postEsperienza = (id, oggetto, formData) => {
  return (dispatch, getState) => {
    fetch(`https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiYzlhYWEyODFkODAwMTlhM2VjNTciLCJpYXQiOjE3MTIwNDg1NTQsImV4cCI6MTcxMzI1ODE1NH0.6sHKqviDfFSd8qv2L8aNnu7plOcEuiqkhnhPbe72vKw`,
      },
      body: JSON.stringify(oggetto),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problema nella chiamata API");
        }
      })
      .then((obj) => {
        console.log("exp", obj);
        dispatch(putImgEsperienza(id, formData, obj._id));
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };
};
