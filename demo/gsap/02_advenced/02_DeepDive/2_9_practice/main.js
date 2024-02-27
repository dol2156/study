$(function () {
  splt({});
  textAnimate();
});

function textAnimate() {
  const $ex_list = $(`.word > .ex`);
  const $imgList = $(`.bg .Img`);

  gsap.set(`.bg .Img`, {
    opacity: 0,
    x: '-10%',
  });
  

  const tl = gsap.timeline({
    repeat: -1,
  });

  $ex_list.each(function (i) {
    const $ex = $(this);
    const $char = $ex.find('.char');
    const $img = $imgList[i];

    tl.from($char, {
      y: 30,
      opacity: 0,
      stagger: 0.1,
    });
    tl.to(
      $img,
      {
        x: 0,
        opacity: 1,
      },
      '<',
    );
    tl.to($char, {
      delay: 1,
      opacity: 0,
      stagger: 0.03,
    });
    tl.to(
      $img,
      {
        x: '10%',
        opacity: 0,
      },
      '<',
    );
  });
}
