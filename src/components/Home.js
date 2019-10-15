import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import logo from '../logo.svg';

const Home = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return (
        <Fragment>
            <header className="App-header">
                <p>
                    Pizza 42
                </p>
            </header>
        </Fragment>
    );
  }

  return (
    <Fragment>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          WELCOME to Pizza 42
        </p>
      </header>
    </Fragment>
  );
};

export default Home;
