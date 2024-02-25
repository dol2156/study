const $stage = $(`.stage`);
const $orange = $(`.stage > .orange`);
const $blue = $(`.stage > .blue`);

gsap.to([$orange, $blue], {
  duration: 1.5,
  rotation: 360,
  ease: 'linear',
  scale: 1.2,
  repeat: -1,
  yoyo: true,
});

$(`#BtnKillTween`).on(`click`, function (e) {
  gsap.killTweensOf($blue);// 모든 트윈 죽이기
  // gsap.killTweensOf($blue, 'scale');// scale 만 트윈 죽이기
});
