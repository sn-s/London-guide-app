const initState = {
  location: null,
  time: null,
  price: null
}

const filterReducer = (state = initState, action) => {
  switch (action.type) {
    case "FILTER":
      return action.payload
    default:
      return state;
  }
}

export default filterReducer;