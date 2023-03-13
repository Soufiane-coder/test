import "./App.scss";
import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import GameField from "./pages/GameField/GameField";
import Setting from "./pages/Setting/Setting";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/login">
          {!this.props.user ? (
            <SignInAndSignUp />
          ) : (
            <Redirect to="/gameField" />
          )}
        </Route>
        <Route exact={true} path="/gameField">
          {this.props.user ? <GameField /> : <Redirect to="/login" />}
        </Route>
        <Route exact={true} path="/setting" component={Setting} />
        <Route exact={true} path="*" component={LandingPage}>
          <div style={{ fontSize: "200px" }}>not found</div>
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
