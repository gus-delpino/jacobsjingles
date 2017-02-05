import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import $ from 'jquery'; //ToDo REMOVE EVIL JQUERY!!!!

import MainContainer from './MainContainer.jsx';

import Home from './pages/Home.jsx';
import Team from './pages/Team.jsx';
import Services from './pages/Services.jsx';
import OurWork from './pages/OurWork.jsx';
import ContactUs from './pages/ContactUs.jsx';

class App extends React.Component {

    render() {

        $("#preloader").delay(500).fadeOut("slow");

        return  <Router history={browserHistory}>
                    <Route path="/" component={MainContainer} >
                        <IndexRoute component={Home} />
                        <Route path="/services" component={Services} />
                        <Route path="/ourwork" component={OurWork} />
                        <Route path="/team" component={Team} />
                        <Route path="/contactus" component={ContactUs} />
                    </Route>
                </Router>
    }

}

export default App;