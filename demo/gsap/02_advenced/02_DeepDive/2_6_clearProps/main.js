$(function () {
  const $boxs = $(`.stage > .box`);

  $boxs.on(`click`, function (evt) {
    console.log(this);
    gsap.to(this, {
      backgroundColor: 'gray',
      width: 300,
      scale: 0.8,
    });
  });

  $(`#BtnReset`).on(`click`, function (evt) {
    console.log(this);
    gsap.set($boxs, {
      //clearProps: 'width,scale',
      clearProps: 'all',
    });
  });
});
