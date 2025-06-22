import { useState } from "react";
import Pages from "./component/Pages.jsx";
import AfterLogin from "./component/AfterLogin.jsx";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      {loggedIn ? (
        <AfterLogin setLoggedIn={setLoggedIn} />  // ✅ Passing it here
      ) : (
        <Pages setLoggedIn={setLoggedIn} />
      )}
    </>
  );
}

export default App;
