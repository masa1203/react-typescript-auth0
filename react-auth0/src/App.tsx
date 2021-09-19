import React from "react";
import Config from "./config";

function App() {
  return (
    <div className="App">
      <h1>React-TypeScript-Auth0</h1>
      {/* 環境変数が取れるどうか確認 */}
      <p>{Config.auth0ClientID}</p>
      <p>{Config.auth0Domain}</p>
    </div>
  );
}

export default App;
