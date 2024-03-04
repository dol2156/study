GSDevTools.create();
$(function () {
  const $textList = $(`.utils > div`);

  const tl = gsap.timeline({});
  const duration = 0.5;

  gsap.set($textList, {
    transformOrigin: '50% 50% -50',
  });

  tl.from($textList, {
    rotationX: -90,
    opacity: 0,
    stagger: {
      each: duration,
    },
  });

  tl.to(
    $textList,
    {
      rotationX: 90,
      opacity: 0,
      stagger: duration,
    },
    duration,
  );
});
