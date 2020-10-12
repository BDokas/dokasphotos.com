import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Techniques from './components/Techniques';
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Biography from './components/Biography';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/techniques" component={Techniques}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/biography" component={Biography}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;