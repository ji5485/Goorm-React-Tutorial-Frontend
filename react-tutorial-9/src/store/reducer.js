import { createAction, handleActions } from 'redux-actions';
import producer from 'immer';

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

export const increase = createAction(INCREASE, number => number);
export const decrease = createAction(DECREASE, number => number);

const initialState = {
  number: 0
};

export default handleActions({
  [INCREASE]: (state, action) => 
    producer(state, draft => {
      draft.number = action.payload
    }),
  [DECREASE]: (state, action) => 
    producer(state, draft => {
      draft.number = action.payload
    })
}, initialState);