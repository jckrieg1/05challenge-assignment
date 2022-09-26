// Global variables:
var currentDateEl = $('#currentDay');
var textArea = $('<textarea>');
var saveButton = $('<button>');



$("body").append(textArea);
$("body").append(saveButton);


$(saveButton).attr("class", "saveBtn");
$(saveButton).text("submit");
$(textArea).attr("class", "textarea");




// Set current date in header area (top of page);
function displayTime () {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a')
    currentDateEl.text(rightNow)
    console.log(rightNow);
};

displayTime()

// Text in section should save to local storage;
// localStorage.setItem('textInput');


// add event listner on button
saveButton.on('click', function() {
    var textInput = $('textarea').val();
    console.log("Hello World");
    localStorage.setItem('savedText', textInput);
    // event.preventDefault()
    });
    
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