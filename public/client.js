console.log('client.js is working');

$(document).ready(function(){
    console.log('jquery is working');
    $('.mathButtons').click(function(){
        console.log('a math button has been clicked'); 
        var firstNumberBox = $('#firstNumberBox').val();
        var secondNumberBox = $('#secondNumberBox').val();
        var mathType = $(this).attr('id');
        console.log(mathType);
        var inputObject = {
            numberOne: firstNumberBox,
            numberTwo: secondNumberBox,
            type: mathType
        };

        console.log(inputObject);

         
        $.ajax({
            method: 'POST',
            url: '/word',
            data: inputObject,
            success: function(response){
                console.log(response);
            
            }
        })
    });
});


function numbersArray(numbers){
    $('#messageContainer').empty();
    for (var i = 0; i < numbers.length; i++) {
        var numbers = numbersArray[i];
        $('#messageContainer').prepend(

        )
        
    }
} 