import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { Main, MyPage } from "./pages";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/mypage" component={MyPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
