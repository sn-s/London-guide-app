export const legendFunc = (type) => {
  if(type === "reset") {
    return {
      type: "RESET",
      payload: "reset"
    }
  } else {
    return {
      type: "LEGEND",
      payload: type
    }
  } 
};