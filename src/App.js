import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-wrapper";

// New - import the React Router components, and the Profile page component
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Checkout from "./components/Checkout";
import GooglePeople from "./components/GooglePeople";
import PrivateRoute from "./components/PrivateRoute";
import ProtectedApi from "./components/ProtectedApi";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" component={Home} exact/>
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/checkout" component={Checkout} />
          <PrivateRoute path="/googlepeople" component={GooglePeople} />
          <PrivateRoute path="/protectedapi" component={ProtectedApi} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;