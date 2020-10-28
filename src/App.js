import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import $ from "jquery";

import Home from "./components/Home";
import Galleries from "./components/Galleries";
import GalleryView from "./components/GalleryView";
import Techniques from "./components/Techniques";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Biography from "./components/Biography";
import Pricing from "./components/Pricing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      galleries: {},
    };
  }

  getGalleryData() {
    $.ajax({
      url: "../galleries.json",
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
          <Route path={"/galleries/" + gallery} component={GalleryView}/>
        );
      }
    }


    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            {render_galleries}
            <Route path="/galleries" component={Galleries} />
            <Route path="/biography" component={Biography} />
            <Route path="/techniques" component={Techniques} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
