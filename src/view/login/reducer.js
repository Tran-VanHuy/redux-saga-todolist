import { AcctionTypes } from "./actions";

export const INITSTALL = {
  list: [],
};

const default_list = (state = INITSTALL, action) => {
  switch (action.type) {
    case AcctionTypes.GET_PRODUCTS: {
      return {
        ...state,
        isLoading: true, //De tao cac componet loading
      };
    }

    case AcctionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: action.payload.data,
        isLoading: false,
      };

    case AcctionTypes.ADD_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };

    case AcctionTypes.ADD_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload.data],
        isLoading: false,
      };

    case AcctionTypes.DELETE_PRODUCTS:
      return {
        ...state,
        success: action.payload,
        isLoading: true,
      };

    case AcctionTypes.DELETE_PRODUCTS_SUCCESS:
      return {
        ...state,
        list: state.list.filter((id) => id.id !== action.payload.data.id),
        isLoading: false,
      };

    case AcctionTypes.PUT_PRODUCTS:
      return {
        ...state,
        list: [...state.list],
        isLoading: true,
      };

    case AcctionTypes.PUT_PRODUCTS_SUCCESS:
      const list = state.list.filter((id) => id.id !== action.payload.id);
      console.log({ list });
      return {
        ...state,
        list: [
          ...state.list.filter((id) => id.id !== action.payload.id),
          action.payload,
        ],
        isLoading: false,
      };

    default:
      return state;
  }
};

export default default_list;
