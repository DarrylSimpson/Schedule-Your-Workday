//the save button functionality (text shows that was entered, and event saved within local storage)
//when refreshed the page the saved items stay

var today = moment().format('MMMM Do YYYY, h:mm a');
var currentTime = moment().hours();
$('#currentDay').append(today);

var text = JSON.parse(localStorage.getItem('todo')) || [];


//Based on the current time, the rows will change color to represent past, present, and future events
$(".row").each(function () {

    //if else statements to deside when a row will change color
    if($(this).attr('id') < currentTime) {

        $(this).find("textarea").addClass("past");
    }
    else if($(this).attr('id') === currentTime) {
        
        $(this).find("textarea").addClass("present");
    } 
    else if($(this).attr('id') > currentTime) {

        $(this).find("textarea").addClass("future");
    }
});

function displayText(text) {
    $('#list-item').empty();

    for (var i = 0; i < text.length; i++) {
        var textItem = $('<textarea>');
        textItem.text(text[i]);
    }
};

$('#save-item').on('click', function() {

    var userInputToDo = $('#list-item')
    .val()
    .trim();

    text.push(userInputToDo);

    displayText(text);

    localStorage.setItem('todo', JSON.stringify(text));
});

displayText(text);