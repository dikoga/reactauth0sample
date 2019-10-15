import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import JSONPretty from 'react-json-pretty';import 'react-json-pretty/themes/monikai.css';

const Profile = () => {
  const { user } = useAuth0();

  return (
    <header className="App-header">
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <JSONPretty id="json-pretty" data={user} />
    </header>
  );
};

export default Profile;
