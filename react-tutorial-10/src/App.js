import React from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as inputActions from './store/modules/input';
import * as dataActions from './store/modules/data';

const App = ({ name, phone, data, inputActions, dataActions }) => {

  const handleChange = e => {
    const { name, value } = e.target;
    inputActions.setInputValue({ name, value });
  }

  const handleSubmit = () => {
    if (name === "" || phone === "") return;

    dataActions.appendData({
      name, phone
    });
    inputActions.setInputValue({
      name: 'name',
      value: ''
    });
    inputActions.setInputValue({
      name: 'phone',
      value: ''
    });
  }

  const handleRemove = id => {
    dataActions.removeData(id);
  }

  return (
    <div className="container">
      <InputBox
        name={name}
        phone={phone}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <PhoneList list={data} deleteItem={handleRemove} />
    </div>
  );
}

export default connect(
  state => ({
    name: state.input.name,
    phone: state.input.phone,
    data: state.data
  }),
  dispatch => ({
    inputActions: bindActionCreators(inputActions, dispatch),
    dataActions: bindActionCreators(dataActions, dispatch)
  })
)(App);
