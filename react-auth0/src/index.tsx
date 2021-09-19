import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Config from "./config";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain={Config.auth0Domain}
    clientId={Config.auth0ClientID}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
