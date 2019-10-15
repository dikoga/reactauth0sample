import React, { useState, useEffect } from "react";
import { useAuth0 } from "../react-auth0-wrapper";
import axios from "axios";
import JSONPretty from 'react-json-pretty';import 'react-json-pretty/themes/monikai.css';

const ProtectedApi = () => {
  const { token } = useAuth0();
  const [info, setInfo] = useState();

  useEffect(() => {
    let config = {
      headers: {
        'Authorization': 'Bearer ' + token,
        'Ocp-Apim-Subscription-Key': '006e7d27a6b441f99468cf442aa4e29f'
      }
    };

    axios.get( 
      'https://apim001.azure-api.net/info',
      config
    ).then((response) => {
      console.log(response.data)
      setInfo(JSON.stringify(response.data))
    }).catch((error) => {
      setInfo(error);
    });
  }, [token]);

  return (
    <header className="App-header">
      <JSONPretty id="json-pretty" data={info} />
    </header>
  );
};

export default ProtectedApi;
