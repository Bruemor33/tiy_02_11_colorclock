
// function checkTime(i){
//   if (i < 10) {
//     i = 0 + i
//   };
//   return i;
// }

console.log('hello world');

(function(){
  'use strict';

  var background;
  background = document.querySelector('body');
  var hours;
  hours = document.querySelector('.hours');
  var minutes;
  minutes = document.querySelector('.minutes');
  var seconds;
  seconds = document.querySelector('.seconds');
  var backcolor = ['rgb(213, 145, 145)', '#D591C1', '#C291D5', '#9791d5', '#91B8D5']

  // seconds = checkTime(seconds);
  // minutes = checkTime(seconds);
  // var randomColor = Math.floor(Math.random()*16777215).toString(16);


  function startTime(){
    var today = new Date();
    // seconds.style.backgroundColor = 'red';
    seconds.textContent = today.getSeconds();
    minutes.textContent = today.getMinutes();
    hours.textContent = today.getHours();
    background.style.backgroundColor = backcolor.getSeconds();
  }

  // function color(){
  //   var today = new Date();
  //   background = backcolor;
  //   seconds.background.backcolor = today.getSeconds();
  // }



  setInterval(startTime, 1000);
  // setInterval(color, 1000);
}());
