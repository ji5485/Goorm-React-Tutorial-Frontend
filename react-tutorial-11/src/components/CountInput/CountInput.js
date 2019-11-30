import React from "react";
import styled from "styled-components";

const Input = styled.input`
  font-size: 15px;
  font-weight: 300;
  width: 80px;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  outline: none;
  text-align: center;
`;

const CountInput = ({ count, onChange }) => {
  return <Input type="number" value={count} onChange={onChange} />;
};

export default CountInput;
