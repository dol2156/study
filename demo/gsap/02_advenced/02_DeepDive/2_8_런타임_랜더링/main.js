$(function () {
  const tl = gsap.timeline({});

  const $orange = $(`.stage .orange`);

  tl.from($orange, {
    y: 50,
    opacity: 0,
  });

  tl.from($orange, {
    opacity: 0,
    immediateRender: false,
  });
});
