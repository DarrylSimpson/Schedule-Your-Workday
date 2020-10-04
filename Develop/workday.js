//add time blocks for standard business hours (9am-5pm)
//color code the time blocks to show if its in the past, future or present (grey, red, green)
//on click of the time block, you can enter an event
//the save button functionality (text shows that was entered, and event saved within local storage)
//when refreshed the page the saved items stay

var today = moment().format('MMMM Do YYYY, h:mm a');
var currentTime = moment().hours();
$('#currentDay').append(today);

//console.log(currentTime);
//Based on the current time, the rows will change color to represent past, present, and future events
$(".row").each(function () {

    if($(this).attr('id') < currentTime) {

        $(this).find("textarea").addClass("past");
    }
    else if($(this).attr('id') === currentTime) {
        
        $(this).find("textarea").addClass("present");
    } 
    else if($(this).attr('id') > currentTime) {

        $(this).find("textarea").addClass("future");
    }

    //console.log($(this).attr('id'))
});
