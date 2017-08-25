import Sample from './lib/Sample';
import $ from 'jquery';
import Fireworks from './lib/Fireworks';

const festival = () => {

  const canvas = $('.canvas').get(0);
  let canvasWidth = $(window).width();
  let canvasHeight = $(window).height();

  if (!canvas || !canvas.getContext) {
    return false;
  }// end if

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  const ctx = canvas.getContext('2d');

  const fireworks = new Fireworks({
    x     : 800,
    y     : 500,
    volume: 50
  });

  fireworks.makeFireworks();

  ctx.fillStyle = 'rgb(255, 225, 100)';
  fireworks.balls.forEach(function (ball, index, array) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, false);
    ctx.fill();
  });// end forEach

  fireworks.calcDistance();
  fireworks.calcAccel();
  fireworks.calcAngle();
  fireworks.debug();

  window.requestAnimationFrame(function () {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    fireworks.popFireworks();

    ctx.fillStyle = 'rgb(255, 225, 100)';
    fireworks.balls.forEach(function (ball, index, array) {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2, false);
      ctx.fill();
    });// end forEach
  });// end requestAnimationFrame

};// end festival

festival();