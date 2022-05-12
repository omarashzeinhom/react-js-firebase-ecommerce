export const initalState = {
  basket: [],
};

// passing the state and action of what to do
const reducer = (state, action) => {
    //debug action start
    console.log(action);
    //debug action end
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;