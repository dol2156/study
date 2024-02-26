$(function () {
  const $box = $(`.stage .box`);
  gsap.to($box, {
    duration: 8,
    rotationY: 360,
    ease: 'none',
    // transformOrigin: '50% 50% -400',
  });
  
  
  const $box2 = $(`.stage2 .box`);
  
  // 자식에게 원근감 줄때 사용
  gsap.set($box2, {
    transformPerspective: 600,
  });

  gsap.to($box2, {
    duration: 8,
    rotationY: 360,
    ease: 'none',
    // transformOrigin: '50% 50% -400',
  });
});
