import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const GooglePeople = () => {
  const { user } = useAuth0();
  const googleConnections = user['https://pizza42.com/googleconnections'];
  
  if (!!!googleConnections) {
    return (
      <header className="App-header">
        <p>Ooopsss, this feature is only available for users signed with a Google account.</p>
      </header>
    );
  }

  return (
    <Fragment>
      <header className="App-header">
        <p>Total of Google Connections found: {googleConnections}</p>
      </header>
    </Fragment>
  );
};

export default GooglePeople;
