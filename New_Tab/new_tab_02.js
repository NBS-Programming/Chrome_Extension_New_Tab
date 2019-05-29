//store the URL for the json file. JSON is not designed to be loaded locally
const dayCalendarURL = 'https://api.myjson.com/bins/iinz8';
//Create an empty array which will store the calendar days of each day of the cycle
let day1dates = [];
let day2dates = [];
let day3dates = [];
let day4dates = [];
let day5dates = [];
let day6dates = [];
let day7dates = [];
let day8dates = [];
//new_tab_02 make an array of the dayXdate buildClassArrays
let cycleDayArray = [day1dates,day2dates, day3dates,day4dates,day5dates,day6dates,day7dates,day8dates];
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
  //look!  no need to parse the JSON
  let dayCalendar;
  //to access the response from the server we need to access the response property of the request
  dayCalendar = dayCalrequest.response;
  //call the buildDayArray function to build the arrays holding a list of days.
  buildDayArray(dayCalendar);
}
//declare the function that will build the dayXday arrays
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
  //the last item in each dayXdates array will be a string value representing the day in the cycle
  day1dates.push('Day 1');
  day2dates.push('Day 2');
  day3dates.push('Day 3');
  day4dates.push('Day 4');
  day5dates.push('Day 5');
  day6dates.push('Day 6');
  day7dates.push('Day 7');
  day8dates.push('Day 8');
  daySpace.textContent = matchDayDate();

}
//function that takes month represented as a three chracter letter string
//and converts it two character number string
//****HOMEWORK*****///
function convertMonth(month){
  switch(month){
    case 'Jan': return '01';
                break;
    case 'Feb': return '02';
                break;
    case 'Mar': return '03';
                break;
    case 'Apr': return '04';
                break;
    case 'May': return '05';
                break;
    case 'Jun': return '06';
                break;
    case 'Jul': return '07';
                break;
    case 'Aug': return '08';
                break;
    case 'Sep': return '09';
                break;
    case 'Oct': return '10';
                break;
    case 'Nov': return '11';
                break;
    case 'Dec': return '12';
                break;
  }
}
//****HOMEWORK*****///
//changes the date object into a 20190524 format
function reformatDayString(day){
  day = day.toDateString();
  let month = day.slice(4,7);
  let date = day.slice(8,10);
  let year = day.slice(11);
  //****HOMEWORK*****/// - complete this function
}
//****HOMEWORK*****///
//Now that we know the dates for each cycle day and the current date.  Match them up!
function matchDayDate(){

  for (let i = 0; i < cycleDayArray.length; i++){
     //We need a nested loop because this array because the array has arrays inside
     for (let j = 0; j <cycleDayArray[i].length; j++){

       }
     }
}
