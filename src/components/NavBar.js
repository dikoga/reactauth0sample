import React from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
        {!isAuthenticated && (
            <nav>
                <Link onClick={() => loginWithRedirect({})}>Log in</Link>
            </nav>
        )}

            
        {isAuthenticated && (
            <nav>
                <Link onClick={() => logout()}>Log out</Link>
                <Link to="/">Home</Link>&nbsp;
                <Link to="/profile">Profile</Link>
                <Link to="/checkout">Checkout</Link>
                <Link to="/googlepeople">Google People</Link>
            </nav>
        )}
    </div>
  );
};

export default NavBar;