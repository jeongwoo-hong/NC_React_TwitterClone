import React from "react"
import { HashRouter as Router, Route, Switch } from "react-router-dom"
import Auth from "../routes/Auth"
import {useState} from 

export default () => {
    const [isLoggedIn, setIsLoggedIn] = useState()
        return (
            <Router>
                <Switch>
                    {isLoggedIn ? (
                    <>
                        <Route></Route>
                    </>
                    ) : (<Route>
                            <Auth/>
                        </Route>
                    )}
                </Switch>
            </Router>
        )
}
