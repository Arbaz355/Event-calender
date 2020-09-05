var inputText = document.getElementById("eventTxt");
var eventType = document.getElementById("eventType");
var date = document.getElementById("date");
var time = document.getElementById("TimeSlot");
var entriesDiv = document.getElementById("entries");
var divideSymbol = ",";

function getLocalData() {
  return localStorage.getItem("key");
}

function setLocalData(value) {
  localStorage.setItem("key", value);
}

renderEntries();

function renderEntries() {
  let data = getLocalData();
  if (data !== null) {
    let dataArray = data.split("#");
    console.log(dataArray);
    entriesDiv.innerHTML = "";
    for (let i = 0; i < dataArray.length; i++) {
      entriesDiv.innerHTML += entryFormate(dataArray[i]);
    }
  }

}

function entryFormate(eventData) {
  let mydataArray = eventData.split(",");
  console.log(mydataArray);
  console.log(eventData);

  // To disable the time slot if someOne has already selected 
  var myarray = [];
  var container = {};
  let selectedDate = date.value;
  let selectedTime = time.value;
  container.date = selectedDate; 
  container.Time = selectedTime;
  container.TimeSlot = ["10:00 AM - 10:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", 
  "01:00 PM - 01:30 PM", "01:30 PM - 02:00 PM", "02:30 PM - 03:00 PM", "03:30 PM - 04:00 PM", "04:30 PM - 05:00 PM"];
  console.log(container);
  myarray.push(container);
  console.log(myarray);
  for(let x=0; x<=container.TimeSlot.length-1; x++){
    console.log(container.TimeSlot[x]);
  } 
  
  let text = mydataArray[0];
  let myEvent = mydataArray[1];
  let myDate = mydataArray[2];
  let myTime = mydataArray[3];
  let color = "";
  if(myEvent === "Conferences"){
    color = "#ebd834";
  }
  else if(myEvent === "Trade Shows"){
    color = "#6fc7ae";
  }
  else if (myEvent === "Workshops"){
    color = "#6450ab";
  }
  else if (myEvent === "Reunions"){
    color = "#599948";

  }
  else if (myEvent === "Parties"){
    color = "#755548";
    
  }
    let newEntry =
    "<div class='entry' style ='display:inline-block; border:2px solid white; border-radius:5px; padding:20px; margin:10px; background-color:"+color+";  height:15em;width:15em; color:#000;'>" +
    "<span id ='myinput' style = ' border-radius:8px; '>" +
    myEvent +
    "</span>" +
    "<span style='background-color:balck; height:5px; width:5px; '></span>" +
    "<br><span style = 'margin:30px 0px 20px 0px;'>" +
    text +
    "</span>" +
    "<br><span>" +
    myDate +
    "</span>" +
    "<br><span style = 'margin:20px 0px 20px 0px;'>" +
    myTime +
    "</span>" +
    "</div>";
  return newEntry;
}

function validateForm() {
  if (inputText.value === "") {
    window.alert("Enter event name");
    return false;
  } else if (eventType.value === "Choose..") {
    window.alert("Choose the event type");
    return false;
  }else if (eventType.value === ""){
    window.alert("Choose the event type");
  } 
  else if (date.value === "") {
    window.alert("Choose the date");
    return false;
  } else if (time.value === "Choose..") {
    window.alert("Choose the time slot");
    return false;
  } else if (time.value === ""){
    window.alert("Choose the time slot");
    return false;
  }
  else {
    return true;
  }

}

function addEntry() {
  if (validateForm() === false) {
    return;
  }
  let data = getLocalData();
  let text = inputText.value;
  let myEvent = eventType.value;
  let myDate = date.value;
  let myTime = time.value;
  console.log(text + myEvent + myDate + myTime);
  if (data === null) {
    setLocalData(
      text +
      divideSymbol +
      myEvent +
      divideSymbol +
      myDate +
      divideSymbol +
      myTime +
      divideSymbol
    );
  } else {
    setLocalData(
      data +
      "#" +
      text +
      divideSymbol +
      myEvent +
      divideSymbol +
      myDate +
      divideSymbol +
      myTime +
      divideSymbol
    );
  }
  renderEntries();
  inputText.value = "";
  eventType.value = "Choose..";
  date.value = "";
  time.value = "Choose..";
  for (let x = 0; x <= 8; x++) {
    time.options[x].disabled = false;
  }
}




function disableBookedTime(){
  
}

function disableTime() {
  if (time.value === "10:00 AM - 10:30 AM") {
    time.options[1].disabled = true;
    time.options[2].disabled = false;
    time.options[3].disabled = false;
    time.options[4].disabled = false;
    time.options[5].disabled = false;
    time.options[6].disabled = false;
    time.options[7].disabled = false;
    time.options[8].disabled = false;
  }
   else if (time.value === "11:30 AM - 12:00 PM") {
    time.options[1].disabled = false;
    time.options[2].disabled = true;
    time.options[3].disabled = false;
    time.options[4].disabled = false;
    time.options[5].disabled = false;
    time.options[6].disabled = false;
    time.options[7].disabled = false;
    time.options[8].disabled = false;
  } 
  else if (time.value === "12:00 PM - 12:30 PM") {
    time.options[1].disabled = false;
    time.options[2].disabled = false;
    time.options[3].disabled = true;
    time.options[4].disabled = false;
    time.options[5].disabled = false;
    time.options[6].disabled = false;
    time.options[7].disabled = false;
    time.options[8].disabled = false;
  } 
  else if (time.value === "01:00 PM - 01:30 PM") {
    time.options[1].disabled = false;
    time.options[2].disabled = false;
    time.options[3].disabled = false;
    time.options[4].disabled = true;
    time.options[5].disabled = false;
    time.options[6].disabled = false;
    time.options[7].disabled = false;
    time.options[8].disabled = false;
  } 
  else if (time.value === "01:30 PM - 02:00 PM") {
    time.options[1].disabled = false;
    time.options[2].disabled = false;
    time.options[3].disabled = false;
    time.options[4].disabled = false;
    time.options[5].disabled = true;
    time.options[6].disabled = false;
    time.options[7].disabled = false;
    time.options[8].disabled = false;
  }
   else if (time.value === "02:30 PM - 03:00 PM") {
    time.options[1].disabled = false;
    time.options[2].disabled = false;
    time.options[3].disabled = false;
    time.options[4].disabled = false;
    time.options[5].disabled = false;
    time.options[6].disabled = true;
    time.options[7].disabled = false;
    time.options[8].disabled = false;
  } 
  else if (time.value === "03:30 PM - 04:00 PM") {
    time.options[1].disabled = false;
    time.options[2].disabled = false;
    time.options[3].disabled = false;
    time.options[4].disabled = false;
    time.options[5].disabled = false;
    time.options[6].disabled = false;
    time.options[7].disabled = true;
    time.options[8].disabled = false;
  } 
  else if (time.value === "04:30 PM - 05:00 PM") {
    time.options[1].disabled = false;
    time.options[2].disabled = false;
    time.options[3].disabled = false;
    time.options[4].disabled = false;
    time.options[5].disabled = false;
    time.options[6].disabled = false;
    time.options[7].disabled = false;
    time.options[8].disabled = true;
  }

}

function disableSlot(){
  console.log(eventDate);
  
}

// date picker for add event form
$(document).ready(function () {
  var date_input = $('input[name="date"]'); //our date input has the name "date"
  var container =
    $(".bootstrap-iso form").length > 0 ?
    $(".bootstrap-iso form").parent() :
    "body";
  date_input.datepicker({
    format: "mm/dd/yyyy",
    container: container,
    todayHighlight: true,
    autoclose: true
  });
});

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wedensday",
  "Thursday",
  "Friday",
  "Saturday"
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
let c_date = new Date();

let month = c_date.getMonth();
let year = c_date.getFullYear();

(function App() {
  const calendar = `<div class="container">    
          <div class="row">
              <div class="col-md-12 col-12 d-flex">
                  <div class="card border-0 mt-5 flex-fill">
                      <div class="card-header py-3 d-flex justify-content-between">
                          <span class="prevMonth">&#10096;</span>
                          <span><strong id="s_m"></strong></span>
                          <span class="nextMonth">&#10097;</span>
                      </div>
                      <div class="card-body px-1 py-3">
                          <div class="table-responsive">
                              <table class="table table-sm table-borderless">
                                  <thead class="days text-center">
                                      <tr>
                                          ${Object.keys(days)
                                            .map(
                                              (key) =>
                                                `<th><span>${days[
                                                  key
                                                ].substring(0, 3)}</span></th>`
                                            )
                                            .join(
                                              ""
                                            )}                                            
                                      </tr>
                                  </thead>
                                  <tbody id="dates" class="dates text-center"></tbody>
                              </table>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-12 col-12 d-flex pa-sm">
                  <div class="card border-0 mt-5 flex-fill d-none" id="event">
                      <div class="card-header py-3 text-center">
                          Add Event
                          <button type="button" class="close hide">
                              <span aria-hidden="true">&times;</span>
                          </button>
                      </div>
                      <div class="card-body px-1 py-3">
                          <div class="text-center">
                              <span class="event-date">06 June 2020</span><br>
                              <span class="event-day">Monday</span>
                          </div> 
                          <div class="events-today my-3 px-3">
                             
                          </div> <br>
                                                 
                      </div>
                  </div>                            
              </div>
          </div>
      </div>
      <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">
          <div class="toast" style="position: absolute; top: 0; right: 15px;" data-delay="3000">
              <div class="toast-header">
              <strong class="mr-auto">Calendar</strong>
              <small>Just now</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
              </div>
              <div class="toast-body">
                  
              </div>
          </div>
      </div>`;
  document.getElementById("app").innerHTML = calendar;
})();

function renderCalendar(m, y) {
  //Month's first weekday
  let firstDay = new Date(y, m, 1).getDay();
  //Days in Month
  let d_m = new Date(y, m + 1, 0).getDate();
  //Days in Previous Month
  let d_pm = new Date(y, m, 0).getDate();

  let table = document.getElementById("dates");
  table.innerHTML = "";
  let s_m = document.getElementById("s_m");
  s_m.innerHTML = months[m] + " " + y;
  let date = 1;
  //remaing dates of last month
  let r_pm = d_pm - firstDay + 1;
  for (let i = 0; i < 6; i++) {
    let row = document.createElement("tr");
    for (let j = 0; j < 7; j++) {
      if (i === 0 && j < firstDay) {
        let cell = document.createElement("td");
        let span = document.createElement("span");
        let cellText = document.createTextNode(r_pm);
        span.classList.add("ntMonth");
        span.classList.add("prevMonth");
        cell.appendChild(span).appendChild(cellText);
        row.appendChild(cell);
        r_pm++;
      } else if (date > d_m && j < 7) {
        if (j !== 0) {
          let i = 0;
          for (let k = j; k < 7; k++) {
            i++;
            let cell = document.createElement("td");
            let span = document.createElement("span");
            let cellText = document.createTextNode(i);
            span.classList.add("ntMonth");
            span.classList.add("nextMonth");
            cell.appendChild(span).appendChild(cellText);
            row.appendChild(cell);
          }
        }
        break;
      } else {
        let cell = document.createElement("td");
        let span = document.createElement("span");
        let cellText = document.createTextNode(date);
        span.classList.add("showEvent");
        if (
          date === c_date.getDate() &&
          y === c_date.getFullYear() &&
          m === c_date.getMonth()
        ) {
          span.classList.add("bg-danger");
        }
        cell.appendChild(span).appendChild(cellText);
        row.appendChild(cell);
        date++;
      }
    }
    table.appendChild(row);
  }
}
renderCalendar(month, year);
$(function () {
  function showEvent(eventDate) {
    let storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents == null) {
      $(".events-today").html(
        '<h5 class="text-center">No events found</h5 class="text-center">'
      );
    } else {
      let eventsToday = storedEvents.filter(
        (eventsToday) => eventsToday.eventDate === eventDate
      );
      let eventsList = Object.keys(eventsToday).map((k) => eventsToday[k]);
      if (eventsList.length > 0) {
        let eventsLi = "";
        eventsList.forEach((event) =>
          $(".events-today").html(
            (eventsLi += `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                  ${event.eventText}
                  <button type="button" class="close remove-event" data-event-id="${event.id}" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>`)
          )
        );
      } else {
        $(".events-today").html(
          '<h5 class="text-center">No events found</h5 class="text-center">'
        );
      }
    }
  }

  function removeEvent(id) {
    let storedEvents = JSON.parse(localStorage.getItem("events"));
    if (storedEvents != null) {
      storedEvents = storedEvents.filter((ev) => ev.id !== id);
      localStorage.setItem("events", JSON.stringify(storedEvents));
      $(".toast-body").html("Your event have been removed");
      $(".toast").toast("show");
    }
  }
  $(document).on("click", ".remove-event", function () {
    let eventId = $(this).data("event-id");
    removeEvent(eventId);
  });

  $(document).on("click", ".prevMonth", function () {
    year = month === 0 ? year - 1 : year;
    month = month === 0 ? 11 : month - 1;
    renderCalendar(month, year);
  });
  $(document).on("click", ".nextMonth", function () {
    year = month === 11 ? year + 1 : year;
    month = (month + 1) % 12;
    renderCalendar(month, year);
  });

  $(document).on("click", ".showEvent", function () {
    $(".showEvent").removeClass("active");
    $("#event").removeClass("d-none");
    $(this).addClass("active");
    let todaysDate = $(this).text() + " " + months[month] + " " + year;
    let eventDay = days[new Date(year, month, $(this).text()).getDay()];
    let eventDate = $(this).text() + month + year;
    $(".event-date").html(todaysDate).data("eventdate", eventDate);
    $(".event-day").html(eventDay);
    showEvent(eventDate);
  });
  $(document).on("click", ".hide", function () {
    $("#event").addClass("d-none");
  });
  $(document).on("click", "#createEvent", function () {
    let events = localStorage.getItem("events");
    let obj = [];
    if (events) {
      obj = JSON.parse(events);
    }
    let eventDate = $(".event-date").data("eventdate");
    let eventText = $("#eventTxt").val();
    let valid = false;
    $("#eventTxt").removeClass("data-invalid");
    $(".error").remove();
  });
});