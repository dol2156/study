// onStart 시작할때
// onUpdate 재생 중
// onComplete 끝날때
// onRepeat 얼만큼 반복되는지

$(function () {
  gsap.to('.orange', {
    y: 100,
    duration: 2.5,
    repeat: 2,
    onStart() {
      console.log('onStart');
    },
    onUpdate() {
      // console.log(this.progress());
    },
    onRepeat(){
      console.log('onRepeat');
    },
    onComplete(name) {
      console.log('onComplete');
      const $Txt1 = $(`.Txt1`);
      $Txt1.text(`${name} 애니메이션 재생 끝`);

      gsap.to('.orange', {
        rotate: 360,
      });
    },
    onCompleteParams: ['오렌지'],
  });
});
