import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-wrapper";

const GooglePeople = () => {
  const { user } = useAuth0();
  if (!user.sub.startsWith('google-oauth2|')) {
    return (
      <header className="App-header">
        <p>Ooopsss, this feature is only available for users signed with a Google account.</p>
      </header>
    );
  }

  return (
    <Fragment>
      <header className="App-header">
        <p>Total of Google Connections found: {user['https://pizza42.com/googleconnections']}</p>
      </header>
    </Fragment>
  );
};

export default GooglePeople;
