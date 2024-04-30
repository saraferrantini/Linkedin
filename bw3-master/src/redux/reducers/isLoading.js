const isLoadingReducer = (state = { isLoading: false }, action) => {
    switch (action.type) {
      case "SET_IS_LOADING_TRUE":
        return {
          isLoading: true,
        };
  
      case "SET_IS_LOADING_FALSE":
        return {
          isLoading: false,
        };
  
      default:
        return state;
    }
  };
  
  export default isLoadingReducer;