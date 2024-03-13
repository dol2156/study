// markers()

$(function () {
  const $hero = $('.hero');
  const $wrap = $hero.find('.wrapper');
  const $sectionList = $wrap.find('> section');
  const sectionLen = $sectionList.length;

  const tween = gsap.fromTo(
    $wrap,
    {
      x: '0%',
    },
    {
      x: function () {
        const tX = -1 * 100 * (sectionLen - 1);
        return `${tX}%`;
      },
    },
  );

  ScrollTrigger.create({
    markers: true,
    //id: `targetSection`,
    animation: tween,
    trigger: $hero,
    pin: true,
    // start: `top bottom`,
    // end: `bottom top`,
    start: `top top`,
    end: function () {
      const h = $(window).height() * sectionLen;
      return `${h} bottom`;
    },
    scrub: true,
    invalidateOnRefresh: true, // 리사이즈 대응
    onEnter: function () {
      console.log('onEnter');
    },
    onEnterBack: function () {
      console.log('onEnterBack');
    },
    onLeave: function () {
      console.log('onLeave');
    },
    onLeaveBack: function () {
      console.log('onLeaveBack');
    },
  });
});
