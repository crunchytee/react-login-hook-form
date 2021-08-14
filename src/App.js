import "./App.css";
import LoginForm from "./LoginForm.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Success from "./Success";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Link to="/login" className="button">
            Show Form
          </Link>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
