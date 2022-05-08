import { useState } from "react";
import { Auth } from "./Auth";
import Route from "./Route";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Route user={user} setUser={setUser} />
      <Auth setUser={setUser} />
    </div>
  );
}

export default App;
