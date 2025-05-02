// @ts-ignore
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['dots'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    autoWatch: false
  });
};
