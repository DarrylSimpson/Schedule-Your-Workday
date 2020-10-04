//the save button functionality (text shows that was entered, and event saved within local storage)
//when refreshed the page the saved items stay

var today = moment().format('MMMM Do YYYY, h:mm a');
var currentTime = moment().hours();
$('#currentDay').append(today);


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

    var storageId = $(this).attr('id');
    var storedText = JSON.parse(localStorage.getItem(storageId));
    console.log(storedText);
    $(this).find('textarea').val(storedText);
});


$('.saveBtn').on('click', function() {
    //console.log("save btn is clicked");
    console.log($(this))


    var newText = $(this).parent().siblings("textarea").val()
    var locationId = $(this).parent().parent().attr('id');

    console.log(newText)
    console.log(locationId);


    localStorage.setItem(locationId, JSON.stringify(newText));
});

