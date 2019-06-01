//store the URL for the json file. JSON is not designed to be loaded locally
const dayCalendarURL = 'https://api.myjson.com/bins/iinz8';
//***HOMEWORK*** these are the URLs for making requests of the NASA Photo of the Day
const nasaPhotoURL = 'https://api.nasa.gov/planetary/apod?api_key=kWCSDKfxVb5vibp7YtI6SRI7BFwO7S1WaebzdDds';

const openWeatherAPI = 'https://api.openweathermap.org/data/2.5/weather?zip=11106,us&APPID=465f3efeb5aab6de70391c4daf193d18';

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

//make a request of the APIs you are using




//remember to wait until the  the requests are completed before using their data



//we need to request the json fil e using the XMLHttpRequest
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
  let reformatDay = year+convertMonth(month)+date;
  return reformatDay;
  }
//****HOMEWORK*****///
//Now that we know the dates for each cycle day and the current date.  Match them up!
function matchDayDate(){
  //what day is it today?
  let today = new Date();
  //declare a value to record if a match in the dayXdates arrays was found
  let noClasses = false;
  //convert date into a string so it is easier to work with
  let todayReformat = reformatDayString(today);
  //iterate through the array of dayXdates.
  for (let i = 0; i < cycleDayArray.length; i++){
     //We need a nested loop because this array because the array has arrays inside
     for (let j = 0; j <cycleDayArray[i].length; j++){
       //We enter the condition below if the match is found
       if (cycleDayArray[i][j] === todayReformat){
         //declare a variable to record the cycle day which is always the last item in the array
         let cycleDay =  cycleDayArray[i][cycleDayArray[i].length -1];
         //return always terminates a loop.  This will return the cycle day
         return cycleDay;
       } else {
         //if no match is found, noClasses is set to true
         noClasses = true;
       }
     }
  }
  //if no class match is found, there are no classes today
  if (noClasses){
    return 'No classes today!';
  }
}
