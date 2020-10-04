var today = moment().format('MMMM Do YYYY, h:mm a'); //create variable to display current time
var currentTime = moment().hours(); //identifying current time in hours

//appendint current time and date to currentDay id to display to page
$('#currentDay').append(today);


//Based on the current time, this happens
$(".row").each(function () {

    //if else statements to deside when a row will change color
    if ($(this).attr('id') < currentTime) {

        $(this).find("textarea").addClass("past");
    }
    else if ($(this).attr('id') === currentTime) {

        $(this).find("textarea").addClass("present");
    }
    else if ($(this).attr('id') > currentTime) {

        $(this).find("textarea").addClass("future");
    }

    var storageId = $(this).attr('id');
    var storedText = JSON.parse(localStorage.getItem(storageId));
    console.log(storedText);
    $(this).find('textarea').val(storedText);
});

//When you click the save button icon this happens
$('.saveBtn').on('click', function () {
    console.log($(this))


    var newText = $(this).parent().siblings("textarea").val();
    var locationId = $(this).parent().parent().attr('id');

    console.log(newText);
    console.log(locationId);


    localStorage.setItem(locationId, JSON.stringify(newText));
});

$(document).ready(function () {
    setInterval(function () {
        location.reload();
    }, 60000);
});