var today = moment().format('dddd MMMM Do YYYY, h:mm a'); //create variable to display current time
var currentTime = moment().hours(); //identifying current time in hours

//appendint current time and date to currentDay id to display to page
$('#currentDay').append(today);


//Based on the current time, this happens
$(".row").each(function () {

    //if else statement to deside when a row will change color by adding classes to elements
    if ($(this).attr('id') < currentTime) {

        $(this).find("textarea").addClass("past");
    }
    else if ($(this).attr('id') == currentTime) {

        $(this).find("textarea").addClass("present");
    }
    else if ($(this).attr('id') > currentTime) {

        $(this).find("textarea").addClass("future");
    }

    //alredy calling on this rows textarea in this function
    //retrieving the text within the textarea from local sorage
    //to diplay on the specified row when refreshed depending on the id of the row
    var storageId = $(this).attr('id');
    var getStoredText = JSON.parse(localStorage.getItem(storageId));
    
    $(this).find('textarea').val(getStoredText);
});

//When you click the save button icon this happens
$('.saveBtn').on('click', function () {
    //declaring variables for for the textareas value, and for the id of the div its in
    var userInput = $(this).parent().siblings("textarea").val();
    var locationId = $(this).parent().parent().attr('id');

    //setting the text within the textarea as a string and saving to local
    localStorage.setItem(locationId, JSON.stringify(userInput));
});

//setting time interval for the entire document to refresh every 15 minutes
$(document).ready(function () {
    setInterval(function () {
        location.reload();
    }, 900000);
});