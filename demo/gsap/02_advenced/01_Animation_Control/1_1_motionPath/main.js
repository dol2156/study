const $tiger = $('#tiger');
const $button = $(`#button`);
const $progressSlider = $(`#progressSlider`);
const $progress = $(`#progress`);
const $time = $(`#time`);

const animation = gsap.to($tiger, {
  duration: 6,
  motionPath: {
    path: '#route',
    align: $tiger,
  },
  onUpdate: function () {
    $progressSlider.val(animation.progress());
    $time.text(animation.time().toFixed(2));
    $progress.text(animation.progress().toFixed(2));
  },
  onComplete: function(param){
  
  },
  onComplete: () => {
    $button.text('play');
  },
});


// animation.paused(true);
// animation.reversed(true);
// animation.timeScale(5);// 배속
// animation.time(3);// seek 이동
// setInterval(() => {
//   console.log(animation.time());// 애니메이션 현재 시간
// }, 100);
// animation.progress(0.5);
// setInterval(() => {
//   console.log(animation.progress());// 진행률
// }, 100);

$progressSlider.on(`change input`, function (evt) {
  animation.pause();

  const val = $(this).val();
  animation.progress(val);
});

$button.on(`click`, function (evt) {
  animation.paused(!animation.paused());

  if (animation.progress() === 1) {
    animation.restart();
  }
  
  btnTxtControl();
});

// animation.pause();
// gsap.to(animation, { time: 3, duration: 10 });
// gsap.to(animation, { progress: 0.5, duration: 10 });
// gsap.to(animation, { timeScale:2, duration:1 });
$(function () {
  $(`g.Location`).on(`click`, function (e) {
    animation.pause();
    btnTxtControl();

    const id = $(this).attr('id');

    let tProgress;
    if (id == 'home') tProgress = 0;
    if (id == 'mountain') tProgress = 0.23;
    if (id == 'river') tProgress = 0.47;
    if (id == 'company') tProgress = 1;
    gsap.to(animation, { progress: tProgress });
  });
});

function btnTxtControl() {
  const btnTxt = animation.paused() ? 'play' : 'pause';
  $button.text(btnTxt);
}
