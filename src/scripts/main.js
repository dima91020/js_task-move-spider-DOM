'use strict';

const spider = document.querySelector('.spider');
const wall = document.querySelector('.wall');

wall.addEventListener('click', (e) => {
  // write code here
  const wallRect = wall.getBoundingClientRect();
  const border = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  let newPositionX = mouseX - wallRect.x - spider.offsetWidth / 2 - border;
  let newPositionY = mouseY - wallRect.y - spider.offsetHeight / 2 - border;

  newPositionX = Math.max(
    0,
    Math.min(newPositionX, wall.clientWidth - spider.offsetWidth),
  );

  newPositionY = Math.max(
    0,
    Math.min(newPositionY, wall.clientHeight - spider.offsetHeight),
  );

  spider.style.left = `${newPositionX}px`;
  spider.style.top = `${newPositionY}px`;
});
