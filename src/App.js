import "./App.scss";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page/LandingPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={LandingPage} />
      </Switch>
    </div>
  );
}

export default App;
