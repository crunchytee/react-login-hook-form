import "./App.css";
import LoginForm from "./LoginForm.js";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Success from "./Success";

function App() {
  return (
    <div className="grid place-items-center h-screen">
      <Router>
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/success">
            <Success />
          </Route>
          <Link to="/login" className="w-1/3 h-1/3 text-center text-3xl bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full p-32">
            Show Form
          </Link>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
