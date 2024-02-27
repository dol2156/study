$(function () {
  startAnimate();
});

function startAnimate() {
  gsap.from(`.stage > div`, {
    duration: 2,
    opacity: 0,
    scale: 0,
    stagger: {
      each: 0.2,
      ease: `power4.inOut`,
      from: `center`,
    },
  });
}
