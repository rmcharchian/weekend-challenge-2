console.log('client.js is working');

$(document).ready(function(){
    console.log('jquery is working');
    $('#enterNumbersbutton').on('click', function(){
        console.log('enterNumbersButton was clicked'); //I can't get this to confirm
        var firstNumberBox = $('#firstNumberBox').val();
        var secondNumberBox = $('#secondNumberBox').val();
        var inputObject = {
            numberOne: firstNumberBox,
            numberTwo: secondNumberBox
        };
        $.ajax({
            method: 'POST',
            url: '/number',
            data: inputObject,
            success: function (response){
                console.log(response);
            }
        })
    });
});

