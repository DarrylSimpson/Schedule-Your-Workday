//add time blocks for standard business hours (9am-5pm)
//color code the time blocks to show if its in the past, future or present (grey, red, green)
//on click of the time block, you can enter an event
//the save button functionality (text shows that was entered, and event saved within local storage)
//when refreshed the page the saved items stay

//add current day on top of the page
//ADD TIME TICKING???
var firstRowEl = document.getElementById("9am");

var today = moment().format('MMMM Do YYYY, h:mm a');
var currentTime = moment().format('ha');
$('#currentDay').append(today);

console.log(currentTime);

function changeColor() {
    firstRowEl = '9am';
    
    if (currentTime >= firstRowEl){
        $("list-item").addClass("present");
        
    }
    else {
        $("list-item").addClass("future");
    };



}
console.log(firstRowEl);
changeColor();