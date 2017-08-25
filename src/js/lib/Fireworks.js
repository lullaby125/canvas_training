/*
* 花火
*/

import Ball from './Ball';

export default class Fireworks {

  constructor (param = {}) {
    this.x = param.x; // x座標
    this.y = param.y; // y座標
    this.volume = param.volume; // 花火を形成する玉の個数
    this.balls = [];// 花火を形成する玉の入れ物
  }// end constructor

  makeFireworks () {
    for (let i = 0; i < this.volume; ++i) {
      this.balls.push(new Ball({
        color : {
          r : 0,
          g : 200,
          b : 255
        },
        size  : 2,
        x  : (this.x + getRand(20, -10)),
        y  : (this.y + getRand(20, -10))
      }));
    }// end for
  }// end makeFireworks

  calcAccel () {
    this.balls.forEach(function (ball, index, array) {
      ball.accel = ball.distance * 0.2;
    });// end forEach
  }// end calcAccel

  calcAngle () {
    const point = {
      x : this.x,
      y : this.y
    }// end point

    this.balls.forEach(function (ball, index, array) {
      ball.angle = getDegreeFromPoints(ball, point);
    });// end forEach
  }// end calcAngle

  calcDistance() {
    const point = {
      x : this.x,
      y : this.y
    }// end point

    this.balls.forEach(function (ball, index, array) {
      ball.distance = getDistanceFromPoints(ball, point);
    });// end forEach
  }// end calcDistance

  popFireworks () {
    let i = 0;
    const posX = this.x;
    const posY = this.y;

    this.balls.forEach(function (ball, index, array) {
      if (!i++)
        console.log(ball.distance);
      ++ball.distance;
      ball.x = ball.distance * (ball.angle * Math.cos(Math.PI / 180)) + posX;
      ball.y = ball.distance * (ball.angle * Math.sin(Math.PI / 180)) + posY;
    });// end forEach
  }// end popFireworks

  debug () {
    console.log("x : "+ this.x);
    console.log("y : "+ this.y);
    console.log("volume : "+ this.volume);
    console.log("distance : "+ this.balls[0].distance);
    console.log("accel : "+ this.balls[0].accel);
    console.log("angle : "+ this.balls[0].angle);
  }// end debug

};// end Fireworks

function getDegreeFromPoints(p1, p2) {
  const radian = Math.atan2(p2.y - p1.y, p2.x - p1.x);
  return radian * 180 / Math.PI;
}// end getDegreeFromPoints

function getDistanceFromPoints(p1, p2) {
  const distance = Math.abs(Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)));
  return distance;
}// end getDistanceFromPoints

function getRand (len, ran) {
  return Math.floor(Math.random() * len + ran);
}// end getRand
