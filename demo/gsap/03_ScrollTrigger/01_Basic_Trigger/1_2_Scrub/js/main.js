(() => {
  let doit;
  window.addEventListener('resize', (evt) => {
    console.log('resize');
    clearTimeout(doit);
    doit = setTimeout(() => {
      const event = new Event('resize_end');
      window.dispatchEvent(event);
    }, 100);
  });
})();

$(function () {
  const $textContainer = $(`.demo-text .textContainer`);
  let tween, scrollTrigger;

  setupAnimation();
  window.addEventListener('resize_end', setupAnimation);

  function setupAnimation() {
    if (tween) tween.kill();
    if (scrollTrigger) scrollTrigger.kill();

    tween = gsap.fromTo(
      $textContainer,
      {
        x: 0,
      },
      {
        x: function () {
          const targetX = -1 * ($textContainer.width() - $(window).width());
          return targetX;
        },
      },
    );

    scrollTrigger = ScrollTrigger.create({
      animation: tween,
      id: 'section.demo-text',
      trigger: '.section.demo-text',
      markers: true,
      start: '40% center',
      end: '60% center',
      // scrub: true,
      scrub: 1,
      onScrubComplete: function (param) {
        // console.log(param);
      },
    });
  }
});
