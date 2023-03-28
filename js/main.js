'use strict';

var gNums;
var gNextNum;
var gStartTime;
var gIntervalId;
var gSize = 4

function onInit() {
  gNextNum = 1
  gNums = getNums(gSize);
  renderBoard();
}

function onRestart() {
  stopTimer()
  document.querySelector('#timer').innerText = '00:00:00'
  document.querySelector('h2').innerText = 'See if you can beat the counting child 💪'
  onInit()
  document.querySelector('h3 span').innerText = gNextNum
}

function renderBoard() {
  var strHTML = '';

  for (var i = 0; i < gSize; i++) {
    // outer array
    strHTML += `<tr>`;
    for (var j = 0; j < gSize; j++) {
      // inner array
      strHTML += `<td class="cell" 
                      onclick="cellClicked(this)">
                     ${getRandNum()}</td>`; // generating table rows for the opened table in HTML Sheet.
    }
    strHTML += `</tr>`;
  }
  var elBoard = document.querySelector('.board');
  elBoard.innerHTML = strHTML;
}

function getRandNum() {
  var randIdx = getRandomInt(0, gNums.length); // 4
  var num = gNums[randIdx]; // 5
  gNums.splice(randIdx, 1);// [1,2,3,4,6,7...]
  return num;
}

function cellClicked(elCell) {
  var clickedNum = +elCell.innerText; // clickedNum = num in each cell.
  if (clickedNum === 1) startTimer();
  if (clickedNum === gNextNum) {
    elCell.classList.add('marked'); // adding css class on every clicked cell.

    if (gNextNum === gSize ** 2) {
      victory()
    } else {
      gNextNum++; // update the model
      document.querySelector('h3 span').innerText = gNextNum // update the dom
    }
  }
}

function victory() {
  stopTimer();
  var greeting = document.querySelector('h2');
  greeting.innerText = 'You did it! Great job 🔥✅👌';
}

function changeDifficulty(size) {
  gSize = size
  onRestart()
}

function startTimer() {
  gStartTime = Date.now();
  gIntervalId = setInterval(updateTimer, 10);
  // playSound('count');
}

function stopTimer() {
  clearInterval(gIntervalId);
}


