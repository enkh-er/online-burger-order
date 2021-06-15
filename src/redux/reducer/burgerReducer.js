const initialState = {
  ingredients: {
    salad: 0,
    cheese: 0,
    bacon: 0,
    meat: 0,
  },
  totalPrice: 5000,
};
const INGREDIENTS_PRICE = { salad: 700, cheese: 300, bacon: 1000, meat: 800 };
const reducer = (state = initialState, action) => {
  if (action.type === "ADD_INGREDIENTS") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
      },
      totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ortsNer],
    };
  } else if (action.type === "REMOVE_INGREDIENTS") {
    return {
      ingredients: {
        ...state.ingredients,
        [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
      },
      totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ortsNer],
    };
  }
  return state;
};
export default reducer;
