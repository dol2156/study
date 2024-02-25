$(function () {
  const $map = $('.map');

  let isZoom = false;

  $(`.navigation > ul > li `).on(`click`, function (e) {
    const id = $(this).attr('id');
    console.log(`id == `, id);

    if (id == 'current') {
      zoomMap();
    }

    if (id == 'mart') {
      drawPath('#emart');
    }

    if (id == 'medi') {
      drawPath('#medi');
    }
  });

  function zoomMap() {
    const tl = gsap.timeline();
    isZoom = true;
    tl.to($map, {
      scale: 2,
      x: 200,
      y: -200,
      duration: 2,
      ease: 'power3.inOut',
    });

    tl.to('#here', { y: -10, repeat: -1, yoyo: true, ease: 'power4.out' });
  }

  function drawPath(targetId) {
    const tl = gsap.timeline({
      defaults: {
        duration: 2,
      },
    });

    tl.set(`${targetId} .pick`, { opacity: 0 });
    tl.to($map, { scale: 1, x: 0, y: 0, duration: isZoom ? 2 : 0 });
    if (isZoom) isZoom = false;

    tl.set(`${targetId} .pick`, { opacity: 1 });
    tl.fromTo(
      `${targetId} path`,
      {
        strokeDashoffset: Math.ceil($(`${targetId} .path`)[0].getTotalLength()),
      },
      { strokeDashoffset: 0 },
    );

    tl.to(
      `${targetId} .pick`,
      {
        motionPath: {
          path: `${targetId} .path`,
          align: `${targetId} .path`,
          alignOrigin: [0.5, 0.5],
        },
      },
      '<',
    );
  }
});
