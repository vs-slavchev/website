/* original idea from: https://stackoverflow.com/a/14282391 by https://stackoverflow.com/users/405017/phrogz */

var percentageChangePerTick = 0.01;
var drawFPS = 60;

var paths = document.querySelectorAll('path.animatable');
var timer;

function startDrawingPath(){
  for (i = 0; i < paths.length; i++) {
    paths[i].style.stroke = '#00FF66';
    paths[i].style.strokeDasharray = 0;
  }
  increaseLength();
  timer = setInterval(increaseLength,1000/drawFPS);
}

function increaseLength(){
  var finished = true;
  for (i = 0; i < paths.length; i++) {
    var totalPathLength = paths[i].getTotalLength();
    var currentLength = parseFloat(paths[i].style.strokeDasharray.split(",")[0]);
    var newLength = currentLength + (percentageChangePerTick * totalPathLength);
    paths[i].style.strokeDasharray = [newLength, totalPathLength].join(' ');
    if (newLength <= totalPathLength) {
      finished = false;
    }
  }
  if (finished) {
    clearInterval(timer);
  }
}
