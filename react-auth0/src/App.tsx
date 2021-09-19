import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Config from "./config";

function App() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Oops...{error.message}</div>;
  }

  if (isAuthenticated) {
    if (user?.email !== Config.authenticatedUserEmail) {
      return (
        <div>
          <p>あなたは利用できるユーザーではありません</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>React-TypeScript-Auth0</h1>
          <p>UserName: {user?.name}</p>
          <p>Email: {user?.email}</p>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log out
          </button>
        </div>
      );
    }
  } else {
    return <button onClick={loginWithRedirect}>Login</button>;
  }
}

export default App;
