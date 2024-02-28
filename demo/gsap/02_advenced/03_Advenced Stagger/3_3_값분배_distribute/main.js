$(function () {
  startAnimate();
});

function startAnimate() {
  const $bar = $(`.stage > .bar`);

  gsap.to($bar, {
    delay: 1,
    height: gsap.utils.distribute({
      base: '0%',
      amount: '100%',
      ease: 'power3.inOut',
      from: 'center',
    }),
    stagger: {
      each: 0.1,
      ease: 'linear',
    },
  });
}
