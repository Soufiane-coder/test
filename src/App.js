import "./App.scss";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";
import GameField from "./pages/GameField/GameField";
import Setting from "./pages/Setting/Setting";
function App() {
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

export default App;
