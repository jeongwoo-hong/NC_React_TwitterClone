import React from "react"
import AppRouter from "./Router";
import { useState } from "react"

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
