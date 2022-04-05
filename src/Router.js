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
        <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
        <Route exact path={process.env.PUBLIC_URL + "/About"} component={About} />
        <Route exact path={process.env.PUBLIC_URL + "/Career"} component={Career} />
        <Route exact path={process.env.PUBLIC_URL + "/Events"} component={Events} />
        <Route exact path={process.env.PUBLIC_URL + "/Classes"} component={Classes} />
        <Route exact path={process.env.PUBLIC_URL + "/Contact"} component={Contact} />
        <Route exact path={process.env.PUBLIC_URL + "/ClassDetail"} component={ClassDetail} />
        <Route exact path={process.env.PUBLIC_URL + "/Team"} component={Team} />
        <Route exact path={process.env.PUBLIC_URL + "/CareerDetails"} component={CareerDetail} />
        <Route exact path={process.env.PUBLIC_URL + "/FAQ"} component={FAQ} />
        <Route exact path={process.env.PUBLIC_URL + "/Facilities"} component={Facilities} />
        <Route exact path={process.env.PUBLIC_URL + "/testGal"} component={testGal} />
        </Switch>
    )
}

export default Router; 
