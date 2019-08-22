import { createAction, handleActions } from 'redux-actions';
import producer from 'immer';

const SET_INPUT_VALUE = 'input/SET_INPUT_VALUE';

export const setInputValue = createAction(SET_INPUT_VALUE, data => data);

const initialState = {
  name: "",
  phone: ""
};

export default handleActions({
  [SET_INPUT_VALUE]: (state, action) =>
    producer(state, draft => {
      const { name, value } = action.payload; 
      draft[name] = value;
    })
}, initialState);