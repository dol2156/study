$(function () {
  const $tiger = $(`.tiger`);

  const tween = gsap.to($tiger, {
    x: 500,
    rotation: 360,
    duration: 3,
  });

  const st = ScrollTrigger.create({
    trigger: '.tigerSection',
    // start: '{대상의 시작 지점} {뷰포트의 지점}',
    // start: 'top bottom', // Default
    // start: 'top center',
    start: 'top 75%',

    // end: 'bottom top', // Default
    end: 'bottom 25%',

    markers: true,
    id: 'tigerSection',

    animation: tween,

    // toggleActions: 'enter leave enterBack leaveBack',
    // toggleActions: 'none none none none',
    // "play", "pause", "resume", "reset", "restart", "complete", "reverse" 및 "none".
    toggleActions: 'restart pause reverse pause',
  });
});
