import React, { useState } from "react"
import AppRouter from "components/Router";
import { authService } from "myBase"

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <>
      <AppRouter isLoggedIn = {isLoggedIn} />
      <footer>&copy; Nwitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
