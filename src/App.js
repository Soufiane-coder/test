import "./App.scss";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";
import SignInAndSignUp from "./pages/SignInAndSignUp/SignInAndSignUp";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
      <Route exact={true} path="/login" component={SignInAndSignUp} />
    </Switch>
  );
}

export default App;
