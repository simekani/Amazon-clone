export const initialState = {
  basket: [],
  user: null,
};

// Selector to tally up the basket
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// it is always listening
// context api -
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "RemoveFromBasket":
      // find index of first of item
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket]; // new basket that is gonna exlude the removed item

      if (index >= 0) {
        // id is found
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "Set_User":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
