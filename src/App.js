import "./App.css";
import Routers2 from "./Route_Param";
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
