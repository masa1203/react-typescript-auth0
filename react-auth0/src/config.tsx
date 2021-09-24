type _Config = {
  auth0Domain: string;
  auth0FrontendClientID: string;
  auth0BackendClientID: string;
  auth0BackendAudience: string;
};

const Config: _Config = {
  auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN || "",
  auth0FrontendClientID: process.env.REACT_APP_AUTH0_FRONTEND_CLIENT_ID || "",
  auth0BackendClientID: process.env.REACT_APP_AUTH0_BACKEND_CLIENT_ID || "",
  auth0BackendAudience: process.env.REACT_APP_AUTH0_BACKEND_AUDIENCE || "",
};

export default Config;
