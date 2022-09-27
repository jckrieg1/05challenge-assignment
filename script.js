// Global variables:
var currentDateEl = $('#currentDay');
// var textArea = $('<textarea>');
// var saveButton = $('<button>');
var timeOfDay = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var timeDiv = $('<div>');

console.log(typeof parseInt(timeOfDay[0]));



function compareTime (i) {
    var currentHour = parseInt (moment().format('HH'));
    var timeNum = parseInt (timeOfDay[i]);
    if(currentHour>timeNum) {
        $(textArea).attr("class", "past")
    } 
    else if(currentHour<timeNum) {
        $(textArea).attr("class", "future")
    }
    else {
        $(textArea).attr("class", "present")
    }
}


// for(var i = 0; i<timeOfDay.length; i++) {
// var textArea = $('<textarea>');
// var saveButton = $('<button>');
// var lineBreak = $('<br>');
// $("body").append(timeOfDay[i]);
// $("body").append(textArea);
// $("body").append(saveButton);
// $("body").append(lineBreak);
// $(saveButton).attr("class", "saveBtn");
// $(saveButton).text("submit");
// $(textArea).attr("class", "textarea");
// compareTime(i)
// }


for(var i = 0; i<timeOfDay.length; i++) {
    var hourBlock = $('<div>');
    var hourTime = $('<div>');
    var textArea = $('<textarea>');
    var saveButton = $('<button>');
    // var lineBreak = $('<br>');
    $("body").append(hourBlock);
    $(hourBlock).append(hourTime);
    $(hourTime).append(timeOfDay[i]);
    $(hourBlock).append(textArea);
    $(hourBlock).append(saveButton);
    $(saveButton).attr("class", "saveBtn");
    $(saveButton).text("Save");
    $(textArea).attr("class", "textarea");
    $(hourBlock).attr("id", timeOfDay[i]);
    $(hourTime).attr("class", "hour");
    $(textArea).attr("class", "description");
    $(textArea).attr("id", timeOfDay[i]);
    console.log(textArea);
    compareTime(i)
    }



// Set current date in header area (top of page);
function displayTime () {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a')
    currentDateEl.text(rightNow)
    console.log(rightNow);
};

displayTime()

console.log(textArea)

var currInput = 

// Text in section should save to local storage;
// localStorage.setItem('textInput');


// add event listner on button
$('.saveBtn').on('click', function() {
    let time = $(this).parent().attr("id");
    var textInput = $('textArea').find('#' + time).val();
  console.log(time);
  console.log(textInput);
  console.log("Hello world, this the button for" + time);
});

    // var textInput = $('textarea').val();
    // var id = $(this.attr('id'));
    // console.log(id)
    // console.log("Hello World");
    // localStorage.setItem('savedText', textInput);
    
    var savedText = localStorage.getItem('savedText');

    textArea.val(savedText);



//   <section class="time-block">
//     <textarea class="textArea1"></textarea>
//     <button class = "saveBtn">Save</button>
//   </section> 
    



// Create time blocks for standard business hours (9am-5pm). Create in HTML;



// Color code time blocks according to whether they are in the past, present, or future to the current time -- using moment.js?;



// Create text area in each time block where I can enter an event.
// Create a save button to save the event
// Save it to local storage;




// When I refresh the page the event should still be there;