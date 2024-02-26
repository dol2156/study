$(function () {
  const $stage = $(`.stage`);
  gsap.to($stage, { autoAlpha: 1 });

  const $H1 = $(`H1`);

  gsap.from($H1.find('.char'), {
    //y: 'random(-100,100)',
    y: gsap.utils.wrap([100, -100]), // 지그재그 순환하여 넣어줌
    opacity: 0,
    stagger: {
      each: 0.02,
      from: 'random',
    },
  });
});
