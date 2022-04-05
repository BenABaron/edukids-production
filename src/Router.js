import React from "react";
import {Switch, Route} from "react-router";
import Home from "./components/Home";
import Career from './components/Career';
import Events from "./components/Events";
import Classes from"./components/Classes";
import Contact from './components/Contact'
import About from "./components/About"
import ClassDetail from "./components/ClassDetail"
import Team from "./components/Team";
import CareerDetail from './components/CareerDetail';
import FAQ from './components/FrequentQuestions';
import Facilities from "./components/Facilities";
import testGal from "./components/testGal";


const Router = () => {
    return (
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Career" component={Career} />
        <Route exact path="/Events" component={Events} />
        <Route exact path="/Classes" component={Classes} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/ClassDetail" component={ClassDetail} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/CareerDetails" component={CareerDetail} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/Facilities" component={Facilities} />
        <Route exact path="/testGal" component={testGal} />
        </Switch>
    )
}

export default Router; 
