//add time blocks for standard business hours (9am-5pm)
//color code the time blocks to show if its in the past, future or present (grey, red, green)
//on click of the time block, you can enter an event
//the save button functionality (text shows that was entered, and event saved within local storage)
//when refreshed the page the saved items stay

//add current day on top of the page
//ADD TIME TICKING???
//var firstRowEl = document.getElementById("9am");
var firstRowEl = document.getElementById("9");
var eventEl = document.getElementsByClassName("event");


var today = moment().format('MMMM Do YYYY, h:mm a');
var currentTime = moment().hours();
$('#currentDay').append(today);

console.log(currentTime);

$(".row").each(function () {

    if ($(this).attr('id') === currentTime){
       
        $('#list-item').addClass("present");
    }
    else {
        
        $('#list-item').addClass("future");
    }
    console.log($(this).attr('id'))
});

// function changeColor() {
//     firstRowEl.id = '9am';

//     $(".row").each(function(){
//         console.log($(this).attr('id'))
//     })
    
//     if (currentTime >= firstRowEl.id){
//         $("list-item").addClass("present");
        
//     }
//     else {
//         $("list-item").addClass("future");
//     };



// }
// console.log(firstRowEl);
// changeColor();