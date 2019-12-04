import React, { useEffect } from "react";
import InputBox from "./components/InputBox";
import PhoneList from "./components/PhoneList";
import "./App.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as dataFunc from "./store/modules/data";
import useInput from "./lib/hooks/useInput";

const App = ({ data, dataFunc }) => {
  const [{ name, phone }, onChange, setInitialValue] = useInput({
    name: "",
    phone: ""
  });

  useEffect(() => {
    const getDataList = async () => {
      try {
        await dataFunc.getDataList();
      } catch (e) {
        console.warn(e);
      }
    };

    getDataList();
  }, []);

  const handleSubmit = async () => {
    if (name === "" || phone === "") return;

    try {
      await dataFunc.appendData({
        name,
        phone
      });
    } catch (e) {
      console.warn(e);
    }

    setInitialValue();
  };

  const handleRemove = async id => {
    try {
      await dataFunc.removeData(id);
    } catch (e) {
      console.warn(e);
    }
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
    dataFunc: bindActionCreators(dataFunc, dispatch)
  })
)(App);
