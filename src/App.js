import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./Pages/NoMatch";
import Home from "./Pages/Home"
import Work from "./Pages/Work"
import About from "./Pages/About"

import NavBar from "./components/NavBar/"

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
        {/* <Books /> */}
      </div>
    </Router>
  );
}

export default App;
