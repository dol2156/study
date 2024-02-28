splt({});

$(function () {
  const $charList = $(`.stage .char`);

  const tl = gsap.timeline({});

  tl.from($charList, {
    delay: 1,
    y: gsap.utils.wrap([-10, 10]),
    opacity: 0,
    filter: 'blur(10px)',
    stagger: {
      each: 0.1,
      from: 'center',
    },
  });

  tl.to($charList, {
    delay: 1,
    duration: 3,
    ease: 'power3.inOut',
    x: gsap.utils.distribute({
      base: -200,
      amount: 400,
    }),
  });

  tl.to($charList, {
    opacity: 0,
    filter: 'blur(10px)',
    stagger: {
      each: 0.1,
      from: 'edges',
    },
  }, '<');
});
