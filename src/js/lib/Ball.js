/*
* 花火のたま
*/

export default class Ball {

  constructor (param = {}) {
    this.accel = 0; // 速度・加速
    this.angle = 0; // 進む角度
    this.distance = 0; // 距離
    this.color = param.color; // 色
    this.size = param.size;   // 大きさ
    this.x = param.x;   // x座標  
    this.y = param.y;   // y座標
  }// end constructor

};// end Ball