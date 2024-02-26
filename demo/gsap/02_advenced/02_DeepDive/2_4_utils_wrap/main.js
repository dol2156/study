$(function () {
  const $stage = $(`.stage`);
  gsap.to($stage, { autoAlpha: 1 });

  const tlH1 = gsap.timeline({});
  const $H1 = $(`H1`);
  const $chars = $H1.find('.char');

  tlH1.from($chars, {
    //y: 'random(-100,100)',
    y: gsap.utils.wrap([100, -100]), // 지그재그 순환하여 넣어줌
    opacity: 0,
    stagger: {
      each: 0.02,
      from: 'random',
    },
  });

  tlH1.to($chars, {
    x: 10,
    color:gsap.utils.wrap(['red', 'blue']),
    stagger: 0.02,
  });
});
