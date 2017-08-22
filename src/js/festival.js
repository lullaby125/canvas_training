import Fireworks from './lib/Fireworks';
import $ from 'jquery';

const festival = () => {

  const canvas = $('.canvas');

  if (!canvas || !canvas.getContext) {
    return false;
  }// end if

  const ctx = canvas.getContext('2d');

  const fireworks = new fireworks({
    posX : 100,
    posY : 100
  });

};// end festival