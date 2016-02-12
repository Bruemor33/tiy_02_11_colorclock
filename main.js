
console.log('hello world');

(function(){
  'use strict';


  var hours;
  hours = document.querySelector('.hours');
  var minutes;
  minutes = document.querySelector('.minutes');
  var seconds;
  seconds = document.querySelector('.seconds');


  function startTime(){
    var today = new Date();
    var currentSec = today.getSeconds();
    var currentMin = today.getMinutes();
    var currentHor = today.getHours();
    // seconds.style.backgroundColor = 'red';
    seconds.textContent = today.getSeconds();
    minutes.textContent = today.getMinutes();
    hours.textContent = today.getHours();
    // background.style.backgroundColor = backcolor.getSeconds();
    if (currentSec < 10){
      seconds.textContent = '0' + currentSec;
    }

    if (currentMin < 10){
      minutes.textContent = '0' + currentMin;
    }

    if (currentHor < 10) {
      hours.textContent = '0' + currentHor;
    }
  }

  function colorChanger(){
    var currentCol = new Date();
    var background = document.querySelector('body');
    var secondsColor = currentCol.getSeconds();

    if (secondsColor < 5){
      background.style.backgroundColor = '#D56C71';
    }
    else {
      background.style.backgroundColor = '#D56C83';
    }
    if (secondsColor >= 10){
      background.style.backgroundColor = '#D56C9D';
    }
    if (secondsColor >= 15){
      background.style.backgroundColor = '#D56CC0';
    }
    if (secondsColor >= 20){
      background.style.backgroundColor = '#CB6CD5';
    }
    if (secondsColor >= 25){
      background.style.backgroundColor = '#B36CD5';
    }
    if (secondsColor >= 30){
      background.style.backgroundColor = '#936CD5';
    }
    if (secondsColor >= 35){
      background.style.backgroundColor = '#836CD5';
    }
    if (secondsColor >= 40){
      background.style.backgroundColor = '#6C6FD5';
    }
    if (secondsColor >= 45){
      background.style.backgroundColor = '#6C81D5';
    }
    if (secondsColor >= 50){
      background.style.backgroundColor = '#6C99D5';
    }
    if (secondsColor >= 55){
      background.style.backgroundColor = '#6CB2D5';
    }

  }

  setInterval(colorChanger, 1000);
  setInterval(startTime, 1000);
}());
