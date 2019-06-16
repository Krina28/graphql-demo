var express = require('express');
var { GraphQLUpload } = require('apollo-server-express');

var app = express();

app.get('/list', function (req, res) {
    res.send('<html> <body> <h2>Hello World</h2> </body></html>')
});

app.listen(4000, function () {
    console.log('Listening on post 4000');
})
