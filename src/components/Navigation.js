import React from 'react';
import { Component } from 'react';
 
import { NavLink } from 'react-router-dom';
 

class Navigation extends Component {
   render() {
      var cartText = (eval(localStorage.photos) === undefined ||eval(localStorage.photos).length === 0 ? 'Cart' : 'Cart (' + eval(localStorage.photos).length + ')')
      return <div id="navigation">
                   <NavLink to="/galleries">Galleries</NavLink>
                   <NavLink to="/techniques">Techniques & Articles</NavLink>
                   <NavLink to="/biography">Biography</NavLink>
                   <NavLink to="/pricing">Pricing</NavLink>
                   <NavLink to="/contact">Contact</NavLink>
                   <NavLink id="cartButton" to="/cart">{cartText}</NavLink>
                </div>
             
   }
}
 
export default Navigation;