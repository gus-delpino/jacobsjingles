import React from 'react';
import {Link} from 'react-router';


class Navigation extends React.Component {

    render() {

        return  <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed"
                                data-toggle="collapse" data-target="#navbar"
                                aria-expanded="false" aria-controls="navbar">

                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">Jacobs <span className="colored">Jingles</span></a>
                    </div>
                    <div className="container">
                        <div id="navbar" className="navbar-collapse collapse">
                            <ul className="nav navbar-nav navbar-right" role="tablist">
                                <li><Link to="/">home</Link></li>
                                <li><Link to="/services">what we do</Link></li>
                                <li><Link to="/ourwork">our work</Link></li>
                                <li><Link to="/team">team</Link></li>
                                <li><Link to="/contactus">contact us</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
    }
}

export default Navigation;