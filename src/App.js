import "./App.css";
import Routers2 from "./Routers_2";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routers2 />
      </div>
    </Router>
  );
}

export default App;
