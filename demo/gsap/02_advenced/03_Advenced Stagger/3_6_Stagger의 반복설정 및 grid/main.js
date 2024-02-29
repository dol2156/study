$(function () {
  const $tigerList = $(`.tiger > div`);

  gsap.to($tigerList, {
    y: 100,
    ease: 'power3.out',
    stagger: {
      each: 0.5,
      repeat: -1,
      yoyo: true,
    },
  });
});

// const l = 8 * 13;
//
// for (let i = 0; i < l; i++) {
//   let template = /* html */ `
//     <div class="box" data-index="${i}"></div>
//   `;
//   document.querySelector('.stage')?.insertAdjacentHTML('beforeend', template);
// }

$(function () {
  const $stage = $(`.stage`);

  let domBox = '';
  let i = 0;
  let len_i = 13 * 10;
  while (i < len_i) {
    domBox += `<div class="box" data-index="${i}">${i}</div>`;
    ++i;
  }

  $stage.append(domBox);

  const $boxList = $(`.stage > .box`);
  gsap.to($boxList, {
    duration: 1,
    stagger: {
      each: 0.1,
      grid: [10, 13],
      // grid: 'auto',
      // axis: 'x',
      from: 'end',
      repeat: -1,
      yoyo: true,
    },
    scale: 0.2,
  });
});
