import React from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataActions from "./store/modules/data";
import useInput from "./lib/hooks/useInput";

const App = ({ data, dataActions }) => {
  const [state, onChange, setInitialValue] = useInput({
    name: "",
    phone: ""
  });

  const { name, phone } = state;

  const handleSubmit = () => {
    if (name === "" || phone === "") return;

    dataActions.appendData({
      name,
      phone
    });

    setInitialValue();
  };

  const handleRemove = id => {
    dataActions.removeData(id);
  };

  return (
    <div className="container">
      <InputBox
        name={name}
        phone={phone}
        onChange={onChange}
        onSubmit={handleSubmit}
      />
      <PhoneList list={data} deleteItem={handleRemove} />
    </div>
  );
};

export default connect(
  state => ({
    data: state.data
  }),
  dispatch => ({
    dataActions: bindActionCreators(dataActions, dispatch)
  })
)(App);
