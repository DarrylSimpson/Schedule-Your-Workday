//add time blocks for standard business hours (9am-5pm)
//color code the time blocks to show if its in the past, future or present (grey, red, green)
//on click of the time block, you can enter an event
//the save button functionality (text shows that was entered, and event saved within local storage)
//when refreshed the page the saved items stay

//add current day on top of the page
//ADD TIME TICKING???

var eventsEl = document.getElementById("event");

var today = moment().format('MMMM Do YYYY, h:mm a');
var currentTime = moment().format('ha');
$('#currentDay').append(today);

//console.log(currentTime);

//save text entry when typed in a block


//save
var saveEvents = function() {
    localStorage.setItem("events", JSON.stringify(events));
};


var list = JSON.parse(localStorage.getItem('listEntry')) || [];

function showListItem(list) {
    $('#list-item').empty();

    for (var i = 0; i < list.length; i++) {
        var listItem = $('<p>');
        listItem.text(list[i]);

        $('#list-item').append(listItem);
    }
}