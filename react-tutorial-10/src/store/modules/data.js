import { createAction, handleActions } from 'redux-actions';
import producer from 'immer';

const APPEND_DATA = 'data/APPEND_DATA';
const REMOVE_DATA = 'data/REMOVE_DATA';

export const appendData = createAction(APPEND_DATA, data => data);
export const removeData = createAction(REMOVE_DATA, id => id);

const initialState = {
  "0": {
    id: "0",
    name: "John",
    phone: "010-0000-0000"
  },
  "1": {
    id: "1",
    name: "Peter",
    phone: "010-1111-1111"
  },
  "2": {
    id: "2",
    name: "Elise",
    phone: "010-2222-2222"
  },
  "3": {
    id: "3",
    name: "Chris",
    phone: "010-3333-3333"
  },
  "4": {
    id: "4",
    name: "Austin",
    phone: "010-4444-4444"
  },
  "5": {
    id: "5",
    name: "Adam",
    phone: "010-5555-5555"
  }
};

var nextId = Object.keys(initialState).length;

export default handleActions({
  [APPEND_DATA]: (state, action) =>
    producer(state, draft => {
      draft[nextId] = {
        id: nextId,
        ...action.payload
      };
      nextId++;
    }),
  [REMOVE_DATA]: (state, action) =>
    producer(state, draft => {
      delete draft[action.payload];
    })
}, initialState);