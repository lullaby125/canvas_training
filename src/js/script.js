import Sample from './lib/Sample';
import $ from 'jquery';

const sample = new Sample({
  name: 'world'
});

$('.wrapper').on('click', () => {
  console.log(`hello, ${sample.name}.`);
});

// ----

import Fireworks from './lib/Fireworks';

const festival = () => {

  const canvas = $('.canvas').get(0);// MISS

  if (!canvas || !canvas.getContext) {
    return false;
  }// end if

  canvas.height = $(window).height();
  canvas.width = $(window).width();

  const ctx = canvas.getContext('2d');

  const fireworks = new Fireworks({
    posX : 800,
    posY : 500
  });

  fireworks.makeFireworks();

  fireworks.balls.forEach(function (ball, index, array) {
    ctx.fillStyle = 'rgb(255, 225, 100)';
    ctx.beginPath();
    ctx.arc(ball.posX, ball.posY, ball.size, 0, Math.PI * 2, false);
    ctx.fill();
  });// end forEach

  fireworks.calcDistance();
  fireworks.calcAccel();
  fireworks.calcAngle();

  var fireflg = setInterval(function () {
    ctx.clearRect(0, 0, 1920, 1080);
    fireworks.popFireworks();

    fireworks.balls.forEach(function (ball, index, array) {
      ctx.fillStyle = 'rgb(255, 225, 100)';
      ctx.beginPath();
      ctx.arc(ball.posX, ball.posY, ball.size, 0, Math.PI * 2, false);
      ctx.fill();
    });// end forEach
  },100);// end setInterval

};// end festival

festival();