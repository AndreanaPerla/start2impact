import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import AboutUs from "./pages/AboutUs";
import Favorites from "./pages/Favorites";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recipe" component={Recipe} />
            <Route path="/about" component={AboutUs} />
            <Route path="/favorites" component={Favorites} />
          </Switch>
        </Router>
      </div>
    </GlobalProvider>
  );
}

export default App;
