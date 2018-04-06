var transpiler = require("./../Transpiler/transpile.js");
var express = require('express');
var path = require('path');

// start express module
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

/*
 * Visit the home page
 */
app.get('*', function (req, res) {
    console.log(__dirname);
    res.sendFile(__dirname + '/public/index.html');
});

var server = app.listen(process.env.PORT || 3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('My site started at http://%s:%s', host, port);
});


// watch and transpile
var instance = new transpiler(["src"], ["public"], function(filepath) {
    var p = path.relative("src", filepath);
    var np = path.join("public", p);
    return np;
}, "/* header */", false, false, false, false, ["src/css/scss_lib"]);