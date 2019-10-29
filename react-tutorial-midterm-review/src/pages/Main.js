import React from "react";
import InputBox from "../components/InputBox";
import { Link } from "react-router-dom";
import { database } from "../lib/database";
import storage from "../lib/storage";

class Main extends React.Component {
  state = {
    id: "",
    password: "",
    logged: false,
    username: ""
  };

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = () => {
    const logged = storage.get("logged");

    this.setState({
      id: "",
      password: "",
      logged: logged,
      username: logged ? storage.get("userInfo").username : ""
    });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleLogin = () => {
    const { id, password } = this.state;

    if (id === "" || password === "" || !database) return;

    for (let i = 0; i < database.length; i++) {
      if (database[i].id === id && database[i].password === password) {
        storage.set("logged", true);
        storage.set("userInfo", database[i]);
        this.checkLogin();
        break;
      }
    }
  };

  handleLogout = () => {
    storage.set("logged", false);
    storage.set("userInfo", {});
    this.checkLogin();
  };

  render() {
    const { handleChange, handleLogin, handleLogout } = this;
    const { id, password, logged, username } = this.state;

    return (
      <div>
        <h1>{logged ? `${username}님 반갑습니다.` : "로그인"}</h1>
        <br />
        <br />
        <InputBox name="id" value={id} onChange={handleChange} />
        <InputBox name="password" value={password} onChange={handleChange} />
        <br />
        <br />
        {logged && <Link to="/mypage">마이페이지</Link>}
        <br />
        <br />
        <button onClick={logged ? handleLogout : handleLogin}>
          {logged ? "로그아웃" : "로그인"}
        </button>
      </div>
    );
  }
}

export default Main;
