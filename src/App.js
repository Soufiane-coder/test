import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import GameField from "./pages/GameField/GameField";
import Setting from "./pages/Setting/Setting";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
class App extends React.Component {
  componentDidMount() {
    const { setCurrentUser } = this.props;
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
  }
  render() {
    return (
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
        <Route exact={true} path="/login" component={SignInAndSignUp} />
        <Route exact={true} path="/gameField" component={GameField} />
        <Route exact={true} path="/setting" component={Setting} />
        <Route exact={true} path="*" component={LandingPage}>
          <div style={{ fontSize: "200px" }}>not found</div>
        </Route>
      </Switch>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
