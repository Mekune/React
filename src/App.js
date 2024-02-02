import "./App.css";
import Routers from "./Routers";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routers />
      </div>
    </Router>
  );
}

export default App;
