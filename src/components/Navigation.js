import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div id="navigation">
          <NavLink to="/galleries">Galleries</NavLink>
          <NavLink to="/techniques">Techniques & Articles</NavLink>
          <NavLink to="/biography">Biography</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       </div>
    );
}
 
export default Navigation;