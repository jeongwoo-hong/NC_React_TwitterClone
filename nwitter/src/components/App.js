import React from "react"
import AppRouter from "components/Router";
import { useState } from "react"
import firebase from "../myBase"

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
