splt({
  target: '.word > div',
});

$(function () {
  const $tiger = $(`.tiger > div`);

  gsap.to($tiger, {
    y: 100,
    stagger: {
      each: 0.2,
      repeat: 1,
      yoyo: true,
      onComplete: function () {
        const target = this.targets()[0];
        gsap.to(target, {
          rotation: 360,
        });
      },
    },
  });
});

$(function () {
  const $lines = $(`.word > div`);
  const $chars = $(`.word > div > .char`);

  const tl = gsap.timeline({});

  tl.from($chars, {
    opacity: 0,
    duration: 2,
    stagger: {
      each: 0.1,
      from: 'random',
      ease: 'power1',
    },
  });

  tl.to($chars, {
    duration: 0,
    color: `#51ff00`,
    stagger: {
      each: 0.1,
      from: 'random',
      ease: 'power1',
    },
  });

  tl.to($lines, {
    delay: 0.5,
    y: 30,
    opacity: 0,
    stagger: {
      each: 0.2,
    },
  });
});

const l = 8 * 13;

for (let i = 0; i < l; i++) {
  let template = /* html */ `
    <div class="box"></div>
  `;
  document.querySelector('.stage')?.insertAdjacentHTML('beforeend', template);
}
