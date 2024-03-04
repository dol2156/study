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
});

$(function () {
  const $boxList = $(`.stage > div`);

  $boxList.on(`click`, function (evt) {
    console.log(this);
    const $box = $(this);
    
    $box.addClass('Stop');
    
    gsap.to($box, {
      backgroundColor: 'red',
    });
  });

  const tween = gsap.to($boxList, {
    scale: 0.3,
    stagger: {
      each: 0.5,
      onStart: function () {
        const t = this._targets[0];
        if($(t).hasClass('Stop')){
          // 줄어듬이 발생하기때문에 애니메이션 시작시간을 정확하게 추출하여 멈출 수 있다.
          tween.pause(this.startTime());
        }
      },
    },
  });
  
});
