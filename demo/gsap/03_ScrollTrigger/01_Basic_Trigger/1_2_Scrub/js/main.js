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
  const $textContainerList = $(`.demo-text .textContainer`);

  $textContainerList.each(function (i) {
    textContainerAnimate(this);
  });

  function textContainerAnimate(text_container) {
    let tween, scrollTrigger;

    if (text_container.Tween) text_container.Tween.kill();
    if (text_container.ScrollTrigger) text_container.ScrollTrigger.kill();

    const $demoText = $(text_container).closest('.demo-text');

    tween = gsap.fromTo(
      text_container,
      {
        x: 0,
      },
      {
        x: function () {
          const targetX = -1 * ($(text_container).width() - $(window).width());
          return targetX;
        },
      },
    );

    scrollTrigger = ScrollTrigger.create({
      animation: tween,
      trigger: $demoText,
      start: '20% center',
      end: '80% center',
      // scrub: true,
      scrub: 1,
      onScrubComplete: function (param) {
        // console.log(param);
      },
    });

    text_container.Tween = tween;
    text_container.ScrollTrigger = scrollTrigger;

    window.addEventListener('resize_end', function (e) {
      console.log(e);
      textContainerAnimate(text_container);
    });
  }
});

$(function () {
  const $imageContainer = $(`.demo-image > .imageContainer`);

  let tween;
  tween = gsap.fromTo(
    $imageContainer,
    {
      x: function () {
        const targetX = -($($imageContainer).outerWidth() - $(window).width());
        return targetX;
      },
    },
    {
      x: 0,
    },
  );

  ScrollTrigger.create({
    markers: true,
    animation: tween,
    scrub: 1,
    start: '20% center',
    end: '80% center',
    trigger: $imageContainer,
  });
});
