/*import React from 'react';
function Navbar(props)
{
    return(
        <div>
            <ul class="nav justify-content-center">
                <li class="nav-item"><a class="nav link active " href="/" aria-current="page">Home</a></li>
                <li class="nav-item"><a class="nav link" href="/Aboutus">Aboutus</a></li>
                <li class="nav-item"><a class="nav link" href="/Contactus">Contactus</a></li>
            </ul>
        </div>
    );

}
export default Navbar;*/
// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/aboutus">About Us</Link>
        </li>
        <li>
          <Link to="/contactus">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
