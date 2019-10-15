import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const Checkout = () => {
  const { user } = useAuth0();
  
  if (!user.email_verified) {
    return (
      <header className="App-header">
        <p >Please, verify your e-mail before checking out.</p>
      </header>
    );
  }

  return (
    <Fragment>
      <header className="App-header">
        <p>Checkout completed successfully.</p>
      </header>
    </Fragment>
  );
};

export default Checkout;
