import React from "react";
import { Link } from "react-router-dom";
import storage from "../lib/storage";

class Signup extends React.Component {
  state = {
    logged: false,
    userInfo: {}
  };

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = () => {
    const logged = storage.get("logged");

    if (!logged) {
      alert("로그인이 필요한 서비스입니다.");
      window.location.replace("/");
    }

    this.setState({
      logged: logged,
      userInfo: storage.get("userInfo")
    });
  };

  render() {
    const { userInfo } = this.state;

    return (
      <div>
        <h1>내 정보</h1>
        <br />
        <br />
        <h3>아이디 : {userInfo.id}</h3>
        <h3>닉네임 : {userInfo.username}</h3>
        <h3>비밀번호 : {userInfo.password}</h3>
        <br />
        <br />
        <Link to="/">돌아가기</Link>
      </div>
    );
  }
}

export default Signup;
