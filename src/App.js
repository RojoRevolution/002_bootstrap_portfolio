import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import NoMatch from "./Pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
