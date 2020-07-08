export const filterFunc = (location, time, price, selectAll, auth) => {
  return {
    type: "FILTER",
    payload: {location, time, price, selectAll, auth}
  }
};