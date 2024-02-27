$(function () {
  startAnimate();
});

function startAnimate() {
  const $tigerList = $(`.wrap > div`);

  gsap.to($tigerList, {
    duration: function (_i, _t) {
      if ($(_t).hasClass('blue')) {
        return 0.5;
      } else {
        return 1;
      }
    },
    rotation: function (_i, _t) {
      if ($(_t).hasClass('blue')) {
        return -360;
      } else {
        return 360;
      }
    },
    repeat: -1,
    ease: 'none',
    stagger: {
      each: 0.2,
      from: 'random',
    },
  });
}
