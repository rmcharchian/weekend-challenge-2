var express = require('express');
var bodyParser = require('body-parser');   

var app = express();
 
var port = 5000;

var numbers = [];

function calculate(objectOne, objectTwo, mathButton) {
    if (mathButton === 'addNumbersButton') {
        numbers = [+objectOne + +objectTwo];
    } else if (mathButton === 'subtractNumbersButton') {
        numbers = [+objectOne - +objectTwo];
    } else if (mathButton === 'multiplyNumbersButton') {
        numbers = [+objectOne * +objectTwo];
    } else {
        numbers = [(+objectOne / +objectTwo)];
    };
    return numbers;
};



app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true})); 

app.post('/word', function (req,res){
    calculate(req.body.numberOne, req.body.numberTwo, req.body.type);
    console.log(numbers);
    console.log(req.body);
})

app.get('/word', function(req, res) {
    console.log(numbers);
    res.send(numbers);
});


app.listen(port, function(){
    console.log('listening on port', port);
});