// Global variables:
var currentDateEl = $('#currentDay');
var timeOfDay = ["9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];
var textAreaTime = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
var timeDiv = $('<div>');
var time = "";
var textInput = "";


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


for(var i = 0; i<timeOfDay.length; i++) {
    var hourBlock = $('<div>');
    var hourTime = $('<div>');
    var textArea = $('<textarea>');
    var saveButton = $('<button>');
    var savedText = localStorage.getItem(timeOfDay[i]);
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
    $(textArea).attr("id", textAreaTime[i]);
    $(textArea).text(savedText);
    compareTime(i)
    }



// Set current date in header area (top of page);
function displayTime () {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a')
    currentDateEl.text(rightNow)
    console.log(rightNow);
};

displayTime()



// add event listner on button
$('.saveBtn').on('click', function() {
    time = $(this).parent().attr("id");
    textInput = $(this).siblings("textarea").val();
    console.log(textInput);
    localStorage.setItem(time, textInput);
    console.log(time);
    console.log(savedText);
});

  
    // localStorage.setItem(time, textInput);
    // console.log(time);
    // var savedText = localStorage.getItem(time);
    // console.log(savedText);
    // textArea.val(savedText);

