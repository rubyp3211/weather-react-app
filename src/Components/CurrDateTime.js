import React from 'react';
const CurrDateTime=()=>{
  var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec",];
  var weekday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
  var now = new Date();
  var year=now.getFullYear();
  var month = months[now.getMonth()];
  var date = now.getDate();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var day = weekday[now.getDay()];
  var period = "AM";
  if (hours > 11) {
    period = "PM";
    if (hours > 12){ 
      hours -= 12;
    }  
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  return(
    <>
      <p>{day} {hours}:{mins} {period}</p> 
      <p>{month} {date},{year}</p>   
    </>
  );

};
export default CurrDateTime;
