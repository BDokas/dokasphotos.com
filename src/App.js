import React, { Component } from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import $ from "jquery";

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
import Purchase from "./components/Purchase";
import Legal from "./components/Legal";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: {},
    };
  }

  getGalleryData() {
    $.ajax({
      url: process.env.PUBLIC_URL + "/galleries.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ galleries: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getGalleryData();
  }

  render() {
    var render_galleries = [];

    if (this.state.galleries.names) {
      var galleries = this.state.galleries.names;

      for (var gallery of galleries) {
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
                  <Galleries {...props} gallery_names={galleries} />
                )}
              />
              <Route path="/biography" component={Biography} />
              <Route path="/techniques" component={Techniques} />
              <Route path="/pricing" component={Pricing} />
              <Route path="/purchase" component={Purchase} />
              <Route path="/legal" component={Legal} />
              <Route path="/contact" component={Contact} />
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
