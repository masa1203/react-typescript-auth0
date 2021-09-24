import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

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
    return (
      <div>
        <h1>React-TypeScript-Auth0</h1>
        <p>UserName: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>{JSON.stringify(user, null, 2)}</p>
        <button onClick={() => logout({ returnTo: window.location.origin })}>
          Log out
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>ログインが必要です</h1>
        <button onClick={loginWithRedirect}>Login</button>
      </div>
    );
  }
}

export default App;
