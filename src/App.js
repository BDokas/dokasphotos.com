import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

import "./css/master.css";

import Home from "./components/Home";
import Galleries from "./components/Galleries";
import Gallery from "./components/Gallery";
import Techniques from "./components/Techniques";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Biography from "./components/Biography";
import Pricing from "./components/Pricing";
import Cart from "./components/Cart";
import Legal from "./components/Legal";
import Checkout from "./components/Checkout"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      galleries: {},
    };
  }

  componentDidMount() {
    fetch('https://api.dokasphotos.com/api/galleries')
       .then(response => response.json())
       .then((jsonData) => {
         this.setState({galleries: jsonData})
         this.setState({isLoaded: true})
       })
       .catch((error) =>  {
         console.error(error);
       })
  }

  render() {
    var render_galleries = [];
    if (this.state.isLoaded) {
      for (var gallery of Object.keys(this.state.galleries)) {
        render_galleries.push(
          <Route path={"/galleries/" + gallery} component={Gallery} />
        );
      }
    }

    return (
      <BrowserRouter>
        <div id="main">
          <header>
            <NavLink to={"/"}>
              <img
                src={require("./img/css_elements/masthead.gif")}
                alt="Dokas Photos ~ Silver Images"
                title="Take me home"
              />
            </NavLink>
          </header>
          <div id="content-wrapper">
            <div id="content">
              <Navigation />
              <Switch>
                <Route path="/" component={Home} exact />
                {render_galleries}
                <Route
                  path="/galleries"
                  render={(props) => (
                    <Galleries {...props} galleries={this.state.galleries} />
                  )}
                />
                <Route path="/biography" component={Biography} />
                <Route path="/techniques" component={Techniques} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/cart" component={Cart} />
                <Route path="/legal" component={Legal} />
                <Route path="/contact" component={Contact} />
                <Route path="/checkout" component={Checkout} />
                <Route component={Error} />
              </Switch>
            </div>
          </div>
        </div>
        <footer>
          ©2004-20 <NavLink to={"/contact"}>Dick Dokas</NavLink>·
          <NavLink to={"/legal"}>All Rights Reserved</NavLink>
        </footer>
      </BrowserRouter>
    );
  }
}

export default App;
