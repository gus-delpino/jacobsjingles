// Stylesheet
var css = require('./less/main.less');

//App
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app.jsx';

ReactDOM.render(<App />, document.getElementById('app'));