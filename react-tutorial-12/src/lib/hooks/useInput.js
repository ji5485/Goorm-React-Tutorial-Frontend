import { useReducer } from "react";

const reducer = (state, action) => {
  return {
    ...state,
    ...action
  };
};

const useInput = initialForm => {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = e => {
    dispatch({ [e.target.name]: e.target.value });
  };

  const setInitialValue = () => {
    dispatch(initialForm);
  };

  return [state, onChange, setInitialValue];
};

export default useInput;
