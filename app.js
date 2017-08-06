var express = require('express');
var bodyParser = require('body-parser');  //can you add body parser too early? 

var app = express();

var port = 5000;

var numbers = [];

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true})); //see body parser question above

//app.post('number', function(req, res){
    //console.log('number post was hit');
    //numbers.push(req.body);
    //console.log(numbers);
    //res.sendStatus(201);
//});

app.get('/number', function(req, res){
    res.send(numbers);
});


app.listen(port, function(){
    console.log('listening on port', port);
});