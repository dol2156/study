// 로컬 호스트 일때만 GSDevTools3 로드
if (window.location.hostname == 'localhost') {
  const url = `/demo/gsap/plugin/GSDevTools3.min.js`;
  $.getScript(url, function (param) {
    gsap.config({ trialWarn: false });
    GSDevTools.create();
  });
}
