$(function () {
  startAnimate();
});

function startAnimate() {
  const $tigerList = $(`.wrap > div`);
  console.log($tigerList);

  gsap.to($tigerList, {
    rotation: 360,
  });
}
