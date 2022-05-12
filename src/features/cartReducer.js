export const initalState = {
  cart: [],
};


// Selector
//calculates the total number  in the cart
export const getCartTotal = (cart)=>
cart?.reduce((amount, item)=> item.price + amount, 0);



// passing the state and action of what to do
const reducer = (state, action) => {
    //debug action start
    console.log(action);
    //debug action end
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    default:
      return state;
  }
};

export default reducer;