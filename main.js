

(function(){
  'use strict';




  setInterval(startTime, 1000);

  function startTime(){
    var today = new Date();
    var hours = document.querySelector('.hours');
    var minutes = document.querySelector('.minutes');
    var seconds = document.querySelector('.seconds');
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
    console.log('hello world');

  }

  setInterval(colorChanger, 1000);

  function colorChanger(){
    var currentCol = new Date();
    var background = document.querySelector('body');
    var secondsColor = currentCol.getSeconds();

    if (secondsColor < 1){
      background.style.backgroundColor = '#FF8F97';
    }
    else {
      background.style.backgroundColor = '#FF8F9F';
    }
    if (secondsColor >= 2){
      background.style.backgroundColor = '#FF8FA9';
    }
    if (secondsColor >= 3){
      background.style.backgroundColor = '#FF8FAE';
    }
    if (secondsColor >= 4){
      background.style.backgroundColor = '#FF8FB6';
    }
    if (secondsColor >= 5){
      background.style.backgroundColor = '#FF8FB8';
    }
    if (secondsColor >= 6){
      background.style.backgroundColor = '#FF8FC1';
    }
    if (secondsColor >= 7){
      background.style.backgroundColor = '#FF8FD2';
    }
    if (secondsColor >= 8){
      background.style.backgroundColor = '#FF8FE3';
    }
    if (secondsColor >= 9){
      background.style.backgroundColor = '#FF8FF0';
    }
    if (secondsColor >= 10){
      background.style.backgroundColor = '#FF8FFF';
    }
    if (secondsColor >= 11){
      background.style.backgroundColor = '#EC8FFF';
    }
    if (secondsColor >= 12){
      background.style.backgroundColor = '#DC8FFF';
    }
    if (secondsColor >= 13){
      background.style.backgroundColor = '#D48FFF';
    }
    if (secondsColor >= 14){
      background.style.backgroundColor = '#CB8FFF';
    }
    if (secondsColor >= 15){
      background.style.backgroundColor = '#BE8FFF';
    }
    if (secondsColor >= 16){
      background.style.backgroundColor = '#B38FFF';
    }
    if (secondsColor >= 17){
      background.style.backgroundColor = '#A68FFF';
    }
    if (secondsColor >= 18){
      background.style.backgroundColor = '#9B8FFF';
    }
    if (secondsColor >= 19){
      background.style.backgroundColor = '#928FFF';
    }
    if (secondsColor >= 20){
      background.style.backgroundColor = '#8F95FF';
    }
    if (secondsColor >= 21){
      background.style.backgroundColor = '#8FA4FF';
    }
    if (secondsColor >= 22){
      background.style.backgroundColor = '#8FB0FF';
    }
    if (secondsColor >= 23){
      background.style.backgroundColor = '#8FB6FF';
    }
    if (secondsColor >= 24){
      background.style.backgroundColor = '#8FBFFF';
    }
    if (secondsColor >= 25){
      background.style.backgroundColor = '#8FC9FF';
    }
    if (secondsColor >= 26){
      background.style.backgroundColor = '#8FD2FF';
    }
    if (secondsColor >= 27){
      background.style.backgroundColor = '#8FDBFF';
    }
    if (secondsColor >= 28){
      background.style.backgroundColor = '#8FE8FF';
    }
    if (secondsColor >= 29){
      background.style.backgroundColor = '#8FF3FF';
    }
    if (secondsColor >= 30){
      background.style.backgroundColor = '#8FFFFC';
    }
    if (secondsColor >= 31){
      background.style.backgroundColor = '#8FFFF1';
    }
    if (secondsColor >= 32){
      background.style.backgroundColor = '#8FFFE6';
    }
    if (secondsColor >= 33){
      background.style.backgroundColor = '#8FFFDA';
    }
    if (secondsColor >= 34){
      background.style.backgroundColor = '#8FFFD1';
    }
    if (secondsColor >= 35){
      background.style.backgroundColor = '#8FFFC8';
    }
    if (secondsColor >= 36){
      background.style.backgroundColor = '#8FFFBE';
    }
    if (secondsColor >= 37){
      background.style.backgroundColor = '#8FFFB2';
    }
    if (secondsColor >= 38){
      background.style.backgroundColor = '#8FFFA9';
    }
    if (secondsColor >= 39){
      background.style.backgroundColor = '#8FFF9E';
    }
    if (secondsColor >= 40){
      background.style.backgroundColor = '#8FFF97';
    }
    if (secondsColor >= 41){
      background.style.backgroundColor = '#8FFF8F';
    }
    if (secondsColor >= 42){
      background.style.backgroundColor = '#9CFF8F';
    }
    if (secondsColor >= 43){
      background.style.backgroundColor = '#ACFF8F';
    }
    if (secondsColor >= 44){
      background.style.backgroundColor = '#B7FF8F';
    }
    if (secondsColor >= 45){
      background.style.backgroundColor = '#C2FF8F';
    }
    if (secondsColor >= 46){
      background.style.backgroundColor = '#CCFF8F';
    }
    if (secondsColor >= 47){
      background.style.backgroundColor = '#DBFF8F';
    }
    if (secondsColor >= 48){
      background.style.backgroundColor = '#E8FF8F';
    }
    if (secondsColor >= 49){
      background.style.backgroundColor = '#F6FF8F';
    }
    if (secondsColor >= 50){
      background.style.backgroundColor = '#FFFB8F';
    }
    if (secondsColor >= 51){
      background.style.backgroundColor = '#FFF48F';
    }
    if (secondsColor >= 52){
      background.style.backgroundColor = '#FFED8F';
    }
    if (secondsColor >= 53){
      background.style.backgroundColor = '#FFE48F';
    }
    if (secondsColor >= 54){
      background.style.backgroundColor = '#FFDB8F';
    }
    if (secondsColor >= 55){
      background.style.backgroundColor = '#FFD18F';
    }
    if (secondsColor >= 56){
      background.style.backgroundColor = '#FFC98F';
    }
    if (secondsColor >= 57){
      background.style.backgroundColor = '#FFBD8F';
    }
    if (secondsColor >= 58){
      background.style.backgroundColor = '#FFB48F';
    }
    if (secondsColor >= 59){
      background.style.backgroundColor = '#FFA88F';
    }
    if (secondsColor >= 60){
      background.style.backgroundColor = '#FFA18F';
    }
    var mouseAction = document.getElementById('clock');
    var currentCol = new Date();
    var secondsColor = currentCol.getSeconds();
    document.getElementById('clock').addEventListener('mouseenter', function(event){
      console.log('happy days');
      mouseAction.textContent = '#FFA18F';
    });
    document.getElementById('clock').addEventListener('mouseleave', function(event){
     mouseAction.innerHTML = '<section id="clock"><div class="row"><div class="col-xs-12"><span class="hours">00</span><span>:</span><span class="minutes">00</span><span>:</span><span class="seconds">00</span></div></div></section>';
     var today = new Date();
     var seconds = document.querySelector('.seconds');
     var minutes = document.querySelector('.minutes');
     var hours = document.querySelector('.hours');
     // seconds.style.backgroundColor = 'red';
     seconds.textContent = today.getSeconds();
     minutes.textContent = today.getMinutes();
     hours.textContent = today.getHours();

   });

  }

}());
