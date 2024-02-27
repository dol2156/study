$(function () {
  boxAnimate();
});

function boxAnimate() {
  const $boxList = $(`.stage > .box`);

  gsap.to($boxList, {
    y: function (i, t) {
      
      if ($(t).hasClass('orange')) {
        return 100;
      }

      if (i % 2) {
        return false;
      }

      return 30;
    },
    stagger: 0.1,
  });
}
