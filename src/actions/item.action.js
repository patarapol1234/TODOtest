import * as t from "../constants";

export const setItemSuccesToState = (payload) => ({
  type: t.ITEM_SUCCESS,
  payload,
});

export const setItemFetchingToState = () => ({
  type: t.ITEM_FETCHING,
});

export const setItemFailedToState = () => ({
  type: t.ITEM_FAILED,
});

export const itemData = (data) => {
  return (dispatch) => {
    try {
      dispatch(setItemFetchingToState());
      dispatch(setItemSuccesToState(data));
    } catch (error) {
      dispatch(setItemFailedToState());
    }
  };
};
