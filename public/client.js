console.log('client.js is working');

$(document).ready(function(){
    console.log('jquery is working');
    $('#addNumbersButton').click(function(){
        console.log('addNumbersButton was clicked'); 
        var firstNumberBox = $('#firstNumberBox').val();
        var secondNumberBox = $('#secondNumberBox').val();
        var inputObject = {
            numberOne: firstNumberBox,
            numberTwo: secondNumberBox
        };
    $('#subtractNumbersButton').click(function(){
        console.log('subtractNumbersButton was clicked'); 
        var firstNumberBox = $('#firstNumberBox').val();
        var secondNumberBox = $('#secondNumberBox').val();
        var inputObject = {
            numberOne: firstNumberBox,
            numberTwo: secondNumberBox
        };
    $('#multiplyNumbersButton').click(function(){   
        console.log('multiplyNumbersButton was clicked'); 
        var firstNumberBox = $('#firstNumberBox').val();
        var secondNumberBox = $('#secondNumberBox').val();
        var inputObject = {
            numberOne: firstNumberBox,
            numberTwo: secondNumberBox
        };
    $('#divideNumbersButton').click(function(){
        console.log('subtractNumbersButton was clicked'); 
        var firstNumberBox = $('#firstNumberBox').val();
        var secondNumberBox = $('#secondNumberBox').val();
        var inputObject = {
            numberOne: firstNumberBox,
            numberTwo: secondNumberBox
        };



        //$.ajax({
            //method: 'POST',
            //url: '/number',
            //data: inputObject,
            //success: function (response){
                //console.log(response);
            //}
        });
    });
    });
    });
});

