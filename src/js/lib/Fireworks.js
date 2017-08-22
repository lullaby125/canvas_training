/*
* 花火
*/

import Ball from './Ball';

export default class Fireworks {

  constructor (param = {}) {
    this.posX = param.posX; // x座標
    this.posY = param.posY; // y座標
    this.balls = [];
  }// end constructor

  getRand (len, ran) {
    return Math.floor(Math.random() * len + ran);
  }// end getRand

  makeFireworks () {
    for (let i = 0, size =  this.getRand(10, 50); i < size; ++i) {
      this.balls.push(new Ball({
        color : {
          r : 0,
          g : 200,
          b : 255
        },
        size  : 2,
        posX  : (this.posX + this.getRand(20, -10)),
        posY  : (this.posY + this.getRand(20, -10))
      }));
    }// end for
  }// end makeFireworks

  calcAccel () {
    this.balls.forEach(function (ball, index, array) {
      ball.accel = ball.distance * 0.2;
    });// end forEach
  }// end calcAccel

  calcAngle () {
    const x = this.posX;
    const y = this.posY;

    this.balls.forEach(function (ball, index, array) {
      ball.angle = Math.atan2((ball.posY - y), (ball.posX - x)) / (Math.PI / 180);
    });// end forEach
  }// end calcAngle

  calcDistance() {
    const x = this.posX;
    const y = this.posY;

    this.balls.forEach(function (ball, index, array) {
      ball.distance = Math.abs(Math.sqrt(Math.pow(ball.posX - x, 2) + Math.pow(ball.posY - y, 2)));
    });// end forEach
  }// end calcDistance

  popFireworks () {
    const x = this.posX;
    const y = this.posY;

    let i = 0;
    this.balls.forEach(function (ball, index, array) {
      if (!i++)
        console.log(ball.distance);
      ++ball.distance;
      ball.posX = ball.distance * (ball.angle * Math.cos(Math.PI / 180)) + x;
      ball.posY = ball.distance * (ball.angle * Math.sin(Math.PI / 180)) + y;
    });// end forEach
    console.log("POP!");
  }// end popFireworks

};// end Fireworks