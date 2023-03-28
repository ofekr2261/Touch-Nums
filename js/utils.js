function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getNums(size) {
  var cellCount = size ** 2; // 16
  var nums = [];
  for (var i = 1; i <= cellCount; i++) { // 0 - 16
    nums.push(i); // nums = [1, ... , 16]
  }
  console.log('nums', nums)
  return nums;
}

function playSound(fileName) {
  var sound = new Audio(`sounds/${fileName}.mp3`);
  sound.play();
}

function updateTimer() {
  var elapsedTime = Date.now() - gStartTime;
  var minutes = Math.floor(elapsedTime / (1000 * 60));
  var seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((elapsedTime % 1000) / 10);
  document.getElementById('timer').textContent =
    formatTime(minutes) +
    ':' +
    formatTime(seconds) +
    ':' +
    formatTime(milliseconds);
}

function formatTime(time) {
  return (time < 10 ? '0' : '') + time;
}
