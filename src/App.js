import "./App.scss";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <Switch>
      <Route exact={true} path="/" component={LandingPage} />
    </Switch>
  );
}

export default App;
