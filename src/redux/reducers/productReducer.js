import { ActionTypes } from "../constants/action-types";

const initialState = {
   products: [{
      id: 1,
      name: "Nirajan",
      category: "programmer"
   }]
}

export const productReducer = (state, action) => {
   switch (action.type) {
      case ActionTypes.SET_PRODUCTS:
         return state;
      default:
         break;
   }
}