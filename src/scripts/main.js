'use strict';

document.addEventListener('click', (e) => {
  // write code here
  const spider = document.querySelector('.spider');
  const wall = document.querySelector('.wall');
  const wallRect = wall.getBoundingClientRect();
  const border = parseFloat(getComputedStyle(wall).borderLeftWidth);
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const closestWall = e.target.closest('.wall');

  if (!closestWall) {
    return;
  }

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
