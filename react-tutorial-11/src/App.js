import React, { useState, useEffect } from "react";
import CountButton from "./components/CountButton";
import CountInput from "./components/CountInput";
import Number from "./components/Number";
import styled from "styled-components";
import { connect } from "react-redux";
import * as countFunc from "./store/modules/count";
import { bindActionCreators } from "redux";

const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-top: 100px;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const App = ({ number, countFunc }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const getNumber = async () => {
      try {
        await countFunc.getNum();
      } catch (e) {
        console.warn(e);
      }
    };

    getNumber();
  }, []);

  const handleCount = e => {
    const value = e.target.value;

    setCount(parseInt(value));
  };

  const handleClick = async type => {
    try {
      if (type === "plus") await countFunc.setNum(number + count);
      else if (type === "minus") await countFunc.setNum(number - count);
    } catch (e) {
      console.warn(e);
    }
  };

  return (
    <Wrapper>
      <CountInput count={count} onChange={handleCount} />
      <ButtonWrapper>
        <CountButton onClick={() => handleClick("plus")} text="+" />
        <CountButton onClick={() => handleClick("minus")} text="-" />
      </ButtonWrapper>
      <Number number={number} />
    </Wrapper>
  );
};

export default connect(
  state => ({
    number: state.count.number
  }),
  dispatch => ({
    countFunc: bindActionCreators(countFunc, dispatch)
  })
)(App);
