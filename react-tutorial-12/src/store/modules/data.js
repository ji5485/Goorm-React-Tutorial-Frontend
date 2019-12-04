import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { pender } from "redux-pender";
import * as API from "../../lib/api/api";

const GET_DATA_LIST = "data/GET_DATA_LIST";
const APPEND_DATA = "data/APPEND_DATA";
const REMOVE_DATA = "data/REMOVE_DATA";

export const getDataList = createAction(GET_DATA_LIST, API.getPhoneList);
export const appendData = createAction(APPEND_DATA, API.appendPhone);
export const removeData = createAction(REMOVE_DATA, API.removePhone);

const initialState = {};

export default handleActions(
  {
    ...pender({
      type: GET_DATA_LIST,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const list = action.payload.data;

          for (let item of list) draft[item.id] = item;
        })
    }),
    ...pender({
      type: APPEND_DATA,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const item = action.payload.data;

          draft[item.id] = item;
        })
    }),
    ...pender({
      type: REMOVE_DATA,
      onSuccess: (state, action) =>
        produce(state, draft => {
          const id = action.payload.data.id;

          delete draft[id];
        })
    })
  },
  initialState
);
