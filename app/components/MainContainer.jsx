import React from 'react';

import Navigation from './Navigation.jsx';

class AppContainer extends React.Component {

    render() {
        return <div>
                    <Navigation />
                    <div className="">
                        {this.props.children}
                    </div>
                </div>
    }
}

export default AppContainer;