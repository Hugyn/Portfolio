import React from 'react';
import "./NavigationBox-style.css"
import NavButtons from './NavButtons'
import Home from "./home/Home"
import About from "./about/About"
import MyWork from "./myWork/MyWork"
import Contact from "./contact/Contact"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

const NavigationBox = () => {
    return (
        <Router>
            <div className="navigationPanel">
                <NavButtons/>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/about" component={About}  />
                            <Route path="/my-work" component={MyWork} />
                            <Route path="/contact" component={Contact} />
                        </Switch>
            </div>
        </Router>
    );
}

export default NavigationBox;