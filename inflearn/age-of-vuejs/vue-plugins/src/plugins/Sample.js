const methods = {
  talk(message) {
    console.log(message);
  },
}

export default {
  install: (app, options) => {
    // 플러그인 코드는 여기에
    app.config.globalProperties.$_Sample = methods;
    app.provide('Sample', options);
  }
}