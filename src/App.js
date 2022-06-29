import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Contacts from "./Contacs";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/blog" component={Blog} exact />
          <Route path="/contacts" component={Contacts} exact />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
