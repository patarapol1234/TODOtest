import * as t from "../constants";

const initialState = {
  isFetching: false,
  isError: false,
  result: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case t.ITEM_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case t.ITEM_FAILED:
      return { ...state, isFetching: false, isError: true, result: null};
    case t.ITEM_SUCCESS:
      return { ...state, isFetching: false, isError: false, result: payload };
    default:
      return state;
  }
};
