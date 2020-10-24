import React from "react";
import Home from "./Pages/Home";
import LandingSearch from "./Pages/LandingSearch";
import ShopingCart from "./Pages/ShopingCart";
import About from "./Pages/About";
import Nav from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/howto" component={() => <div style={{textAlign:'center'}}>Dummy component to check Router</div>} />
          <Route exact path="/myhometosearch/:id">
            <LandingSearch />
          </Route>
          <Route path="/cart">
            <ShopingCart />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
