import {
  GET_DATA,
  ADD_COLOR_AND_ID,
  ADD_SIZE,
  SUCCESS_SET_CONFIRMATION,
  RESET_SELECTED_PRODUCTS,
  START_TIME
} from "./actions";

const initialState = {
  products: [], // data from API
  isLoading: true, // loading data
  selectedProducts: [], // array of selected products (objects-> id, color, size)
  selectedSets: [], //  array of arrays with selected products ([[obj], [obj]])
  startTime: 0,
  endTime: 0
};

function productsReducer(state = initialState, action) {
  // debugger;
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    /**
     * We makes shallow copy of the state (object we dont need to change)
     * and a deep copy of the object that we changing
     *  */

    case ADD_COLOR_AND_ID:
      // console.log(">>> action: ", action.payload);
      const newState = {
        ...state,
        selectedProducts: state.selectedProducts.map((item) => {
          if (item.id === action.payload.id) {
            return {
              id: item.id,
              name: item.name,
              brand: item.brand,
              color: item.color,
              type: item.type
            };
          } else {
            return item;
          }
        })
      };
      const singleSelectedProduct = newState.selectedProducts.find(
        (item) => item.type === action.payload.type
      );
      if (singleSelectedProduct) {
        if (singleSelectedProduct.id === action.payload.id) {
          singleSelectedProduct.color = action.payload.color;
        } else {
          singleSelectedProduct.id = action.payload.id;
          singleSelectedProduct.color = action.payload.color;
        }
      } else {
        newState.selectedProducts = [...state.selectedProducts, action.payload];
      }
      // console.log("newState", newState);
      return newState;
    case ADD_SIZE:
      const newerState = {
        ...state,
        selectedProducts: state.selectedProducts.map((item) => {
          if (item.size === action.payload.size) {
            return {
              ...item,
              size: item.size
            };
          } else {
            return item;
          }
        })
      };
      const singleSelectedProductSize = newerState.selectedProducts.find(
        (item) => item.type === action.payload.type
      );
      if (singleSelectedProductSize) {
        singleSelectedProductSize.size = action.payload.size;
      } else {
        newerState.selectedProducts = [
          ...state.selectedProducts,
          action.payload
        ];
      }
      return newerState;
    case SUCCESS_SET_CONFIRMATION:
      const successState = {
        ...state,
        selectedSets: [...state.selectedSets, action.payload.selectedProducts],
        endTime: action.payload.endTimePoint
      };
      // console.log("successState:", successState);
      return successState;
    case RESET_SELECTED_PRODUCTS:
      const resetState = {
        ...state,
        selectedProducts: initialState.selectedProducts
      };
      return resetState;
    // return initialState;  // reset to initialState
    case START_TIME:
      const startTimeState = {
        ...state,
        startTime: action.payload.startTimePoint
      };
      return startTimeState;
    default:
      return state;
  }
}

export default productsReducer;
