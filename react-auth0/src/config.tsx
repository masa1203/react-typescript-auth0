type _Config = {
  auth0ClientID: string;
  auth0Domain: string;
};

const Config: _Config = {
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  auth0ClientID: process.env.REACT_APP_AUTH0_CLIENT_ID || "",
};

export default Config;
