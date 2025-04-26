let football = document.getElementById('ball');
let footballPitch = document.querySelector('.pitch');

let leftGoal = document.querySelector('.left-goal');
let rightGoal = document.querySelector('.right-goal');

let homeScore = document.getElementById('home');
let awayScore = document.getElementById('away');

let homeCount = 0, awayCount = 0;

footballPitch.addEventListener('click',(event) => {
    let pitchRect = footballPitch.getBoundingClientRect();

    let moveBallX = event.clientX - pitchRect.left;
    let moveBallY = event.clientY - pitchRect.top;
    
    let ballSize = football.offsetWidth;

    football.style.top = (moveBallY - ballSize/2) + 'px';
    football.style.left = (moveBallX - ballSize/2) + 'px';


    // RECORD SCORE
    let leftRect = leftGoal.getBoundingClientRect();
    let rightRect = rightGoal.getBoundingClientRect();
    let footballRect = football.getBoundingClientRect();

const homeGoal =
    footballRect.left < rightRect.right &&
    footballRect.right > rightRect.left &&
    footballRect.top < rightRect.bottom &&
    footballRect.bottom > rightRect.top;

if (homeGoal) {
    console.log("GOAL for Home!");
    homeCount++;
    homeScore.textContent = homeCount;
}

const awayGoal =
footballRect.left < leftRect.right &&
footballRect.right > leftRect.left &&
footballRect.top < leftRect.bottom &&
footballRect.bottom > leftRect.top;

if (awayGoal) {
console.log("GOAL for Away!");
awayCount++;
awayScore.textContent = awayCount;
}
})
























// ball.onmousedown = function(event) {

//     let shiftX = event.clientX - ball.getBoundingClientRect().left;
//     let shiftY = event.clientY - ball.getBoundingClientRect().top;
  
//     ball.style.position = 'absolute';
//     ball.style.zIndex = 1000;
//     document.body.append(ball);
  
//     moveAt(event.pageX, event.pageY);
  
//     // moves the ball at (pageX, pageY) coordinates
//     // taking initial shifts into account
//     function moveAt(pageX, pageY) {
//       ball.style.left = pageX - shiftX + 'px';
//       ball.style.top = pageY - shiftY + 'px';
//     }
  
//     function onMouseMove(event) {
//       moveAt(event.pageX, event.pageY);
//     }
  
//     // move the ball on mousemove
//     document.addEventListener('mousemove', onMouseMove);
  
//     // drop the ball, remove unneeded handlers
//     ball.onmouseup = function() {
//       document.removeEventListener('mousemove', onMouseMove);
//       ball.onmouseup = null;
//     };
  
//   };
  
//   ball.ondragstart = function() {
//     return false;
//   };
