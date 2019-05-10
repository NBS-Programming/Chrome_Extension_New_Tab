//store the URL for the json file. JSON is not designed to be loaded locally
const dayCalendarURL = 'https://api.myjson.com/bins/iinz8';
const classCalendarURL = 'https://api.myjson.com/bins/xxsjo';

//Create an empty array which will store the calendar days of each day of the cycle
let day1dates = [];
let day2dates = [];
let day3dates = [];
let day4dates = [];
let day5dates = [];
let day6dates = [];
let day7dates = [];
let day8dates = [];

//Delcare the variables which will hold our Day Objects - note the constructor has not been defined in this code
let Day1;
let Day2;
let Day3;
let Day4;
let Day5;
let Day6;
let Day7;
let Day8;
//we need to request the json file using the XMLHttpRequest
let dayCalrequest = new XMLHttpRequest();
dayCalrequest.open('GET', dayCalendarURL);
dayCalrequest.responseType = 'json';
dayCalrequest.send();

//the onload event fires when the dayCalrequest is complete
dayCalrequest.onload = function(){
  //new_tab_02
  //after we have loaded the dayCalendar, we can load the Class Calendar.
  //the method is the same as for the dayCalendar
  var classCalrequest = new XMLHttpRequest();
  var classCalendar;
  classCalrequest.open('GET', classCalendarURL);
  //look!  no need to parse the JSON
  classCalrequest.responseType = 'json';
  classCalrequest.send();

  let dayCalendar;
  //to access the response from the server we need to access the response property of the request
  dayCalendar = dayCalrequest.response;
  //call the buildDayArray function to build the arrays holding a list of days.
  buildDayArray(dayCalendar);
  //the onload event fires when the classCalrequest is complete

  classCalrequest.onload = function(){
    classCalendar = classCalrequest.response;
    buildClassArrays(classCalendar);

    convertDays(dayArray);
    checkDay();

  }
}

function buildDayArray(dayCal){
  //look through the json file "Eight Day Calendar" and assemble arrays of each date
  for (let i = 0; i < dayCal.VCALENDAR[0].VEVENT.length; i++){
    let day = dayCal.VCALENDAR[0].VEVENT[i].SUMMARY;
    let dtStamp = dayCal.VCALENDAR[0].VEVENT[i];
    let date = dtStamp["DTSTART;VALUE=DATE"];

    if ( day === 'Day 1'){
      day1dates.push(date);
    }
    if ( day === 'Day 2'){
      day2dates.push(date);
    }
    if ( day === 'Day 3'){
      day3dates.push(date);
    }
    if ( day === 'Day 4'){
      day4dates.push(date);
    }
    if ( day === 'Day 5'){
      day5dates.push(date);
    }
    if ( day === 'Day 6'){
      day6dates.push(date);
    }
    if ( day === 'Day 7'){
      day7dates.push(date);
    }
    if (day === 'Day 8'){
      day8dates.push(date);
    }
  }
}

//new_tab_02.js
//Now that we know the dates that correspond to the individual days of the cycle.  Lets find the courses that occur on those days.
