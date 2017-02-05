const express = require('express');
const path = require('path');

const port = process.env.PORT || 48443;

const app = express();

//Serve static assets
app.use(express.static(__dirname + '/build'));

//Handle all responses with index.html
app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port);
console.log("listening on port: " + port);