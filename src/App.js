import "./App.scss";
import React from "react";
import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import GameField from "./pages/GameField/GameField";
import Setting from "./pages/Setting/Setting";
import { connect } from "react-redux";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import DisplayModeSwitcher  from './components/DisplayModeSwitcher/DisplayModeSwitcher';
import NavigationBar from "./components/NavigationBar/NavigationBar";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <DisplayModeSwitcher/>
        <HashRouter>
      <NavigationBar/>
          <Switch>
            <Route exact={true} path="/" component={LandingPage} />
            <Route exact={true} path="/signin">
              {!this.props.user ? (
                <SignInAndSignUp />
              ) : (
                <Redirect to="/gameField" />
              )}
            </Route>
            <Route exact={true} path="/gameField">
              {this.props.user ? <GameField /> : <Redirect to="/signin" />}
            </Route>
            <Route exact={true} path="/statistics">
              {this.props.user ? <div>statistic</div> : <Redirect to="/signin" />}
            </Route>
            <Route exact={true} path="/setting" component={Setting} />
            <Route exact={true} path="*">
              <div style={{ fontSize: "200px" }}>not found</div>
            </Route>
            
          </Switch>
          
        </HashRouter>
      </>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
});

export default connect(mapStateToProps)(App);
