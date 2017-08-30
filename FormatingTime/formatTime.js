// This function convert minutes to hours with minutes

const formatTime = (minTime) => {
  let hours = Math.floor(minTime/60);
  let mins = minTime - 60 * hours;
  formHours = (String(hours).length === 1) ? '0' + String(hours) : String(hours);
  formMins = (String(mins).length === 1) ? '0' + String(mins) : String(mins);
  return formHours + ':' + formMins;
};

let minutes = prompt('Insert minutes to format them to hh:mm'),
    par = document.getElementById('time');
par.innerHTML = formatTime(minutes);
