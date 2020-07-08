const initState = {
  Activities: false,
  Sightseeing: false,
  Shopping: false,
  Restaurant: false,
  Clubbing: false
}

const legendReducer = (state = initState, action) => {
  switch (action.type) {
    case "LEGEND":
      const type = action.payload;
      return {
        ...state,
        [type] : state[type] === type ? false : type
      }
    case "RESET":
      return {
        Activities: false,
        Sightseeing: false,
        Shopping: false,
        Restaurant: false,
        Clubbing: false
      }
    default:
      return state;
  }
}

export default legendReducer;